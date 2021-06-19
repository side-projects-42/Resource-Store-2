module NewRelic
  module Plugin
#
# Run class. Provides entry points and polling initiation support.
#
    class Run
      #
      # Primary Driver entry point
      #
      def self.setup_and_run component_type_filter = nil
        run = new
        run.setup_from_config component_type_filter
        run.setup_no_config_agents
        run.agent_startup
        run.loop_forever
        run.agent_shutdown
      end
      def initialize
        @config = NewRelic::Plugin::Config.config
        @context = NewRelic::Binding::Context.new(
          @config.newrelic['license_key'] || ENV['NEWRELIC_LICENSE_KEY']
        )
        configuration_and_logging
      end

      def configuration_and_logging
        if @config.newrelic["verbose"].to_i > 0
          NewRelic::PlatformLogger.log_level = ::Logger::DEBUG
        end
        PlatformLogger.info("Using Ruby SDK version: #{NewRelic::Plugin::VERSION}")

        if @config.newrelic['endpoint']
          NewRelic::Binding::Config.endpoint = @config.newrelic['endpoint']
          PlatformLogger.info("Using alternate endpoint: #{NewRelic::Binding::Config.endpoint}")
        end

        unless @config.newrelic['ssl_host_verification'].nil?
          NewRelic::Binding::Config.ssl_host_verification = !!@config.newrelic['ssl_host_verification']
          PlatformLogger.info("Disabling ssl host verification") unless NewRelic::Binding::Config.ssl_host_verification
        end

        if @config.newrelic['proxy']
          NewRelic::Binding::Config.proxy = @config.newrelic['proxy']
          PlatformLogger.info("Using a proxy: #{NewRelic::Binding::Config.proxy.inspect}")
        end

        @poll_cycle_period = (@config.newrelic["poll"] || 60).to_i
        NewRelic::Binding::Config.poll_cycle_period = @poll_cycle_period
        if @poll_cycle_period <= 0
          message = "A poll cycle period less than or equal to 0 is invalid"
          PlatformLogger.fatal(message)
          abort message
        end
        if @poll_cycle_period != 60
          PlatformLogger.warn("WARNING: Poll cycle period differs from 60 seconds (current is #{@poll_cycle_period})")
        end
      end

      def installed_agents
        if Setup.installed_agents.size == 0
          PlatformLogger.error("No agents installed!")
          raise NoAgents, "No agents installed"
        end
        Setup.installed_agents
      end

      def configured_agents
        agent_setup.agents
      end

      def setup_from_config(component_type_filter = nil)
        return unless NewRelic::Plugin::Config.config.agents
        installed_agents.each do |agent_id, installed_agent|
          next if component_type_filter and agent_id != component_type_filter
          config_list = NewRelic::Plugin::Config.config.agents[agent_id.to_s]
          next unless config_list
          [config_list].flatten.each do |config|
            next unless config
            # Convert keys to symbols...
            config.keys.each { |key|config[(key.to_sym rescue key) || key] = config.delete(key) }
            agent_setup.create_agent @context, agent_id, config
          end
        end
      end
      #
      # Add an entry for agents that require no configuration (and hence no instances)
      #
      def setup_no_config_agents
        installed_agents.each do |agent_id,installed_agent|
          unless installed_agent[:agent_class].config_required?
            agent_setup.create_agent agent_id,installed_agent[:agent_class].label,{}
          end
        end
      end
      def setup &block
        block.call(agent_setup)
      end

      def agent_startup
        if configured_agents.size == 0
          err_msg = "No agents configured!"
          err_msg += " Check the agents portion of your yml file." unless NewRelic::Plugin::Config.config.options.empty?
          PlatformLogger.error(err_msg)
          raise NoAgents, err_msg
        end
        installed_agents.each do |agent_id,installed_agent|
          version = installed_agent[:agent_class].version
          PlatformLogger.info("Agent #{installed_agent[:label]} is at version #{version}") if version
        end
        configured_agents.each do |agent|
          agent.startup if agent.respond_to? :startup
        end
      end

      #
      # Call this method to loop forever. This will delay an appropriate amount until
      # the next metric pull is needed, then it will loop thru all configured agents
      # and call each one in turn so it can perform it's appropriate metric pull.
      #

      def loop_forever
        @done = false
        begin
          while !@done
            @last_run_time = Time.now
            request = @context.get_request()
            run_agent_data_collection(request)
            request.deliver
            PlatformLogger.info("Gathered #{request.metric_count} statistics from #{request.component_count} components")

            seconds_to_delay = @poll_cycle_period - (Time.now - @last_run_time)
            sleep(seconds_to_delay) if seconds_to_delay > 0
          end
        rescue Interrupt => err
          PlatformLogger.info "Shutting down..."
        end
      end

      def run_agent_data_collection(request)
        PlatformLogger.debug('Start collecting agent data for poll cycle')
        configured_agents.each do |agent|
          begin
            agent.run(request)
          rescue => err
            PlatformLogger.error("Error occurred in poll cycle: #{err}")
            PlatformLogger.debug("Stacktrace:\n#{err.backtrace.join("\n")}")
          end
        end
        PlatformLogger.debug('Finished collecting agent data for poll cycle')
      end

      def agent_shutdown
        configured_agents.each do |agent|
          agent.shutdown if agent.respond_to? :shutdown
        end
        PlatformLogger.info("Shutdown complete")
      end

      def agent_setup
        @agent_setup ||= AgentSetup.new
      end
    end
  end
end
