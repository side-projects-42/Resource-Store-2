desc 'outputs hello to the terminal'
namespace :greeting do
  desc 'outputs hello to the terminal'
    task :hello do
      puts "hello from Rake!"
    end
   
    desc 'outputs hola to the terminal'
    task :hola do
      puts "hola de Rake!"
    end
  end

  namespace :db do
    desc 'migrate changes to your database'
    task :migrate => :environment do
      Student.create_table
    end

    desc 'seed the db with dummy data'
    task :seed do
      require_relative './db/seeds.rb'
    end
  end

  desc 'needed for the migrat task to work'
  task :environment do
    require_relative './config/environment'
  end

  desc 'drop into a Pry console'
  task :console => :environment do
    Pry.start
  end