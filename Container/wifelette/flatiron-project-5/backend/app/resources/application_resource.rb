# https://www.graphiti.dev/guides/concepts/resources

class ApplicationResource < Graphiti::Resource
  self.adapter = Graphiti::Adapters::ActiveRecord
  self.abstract_class = true
end