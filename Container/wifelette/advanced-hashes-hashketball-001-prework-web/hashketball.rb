def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson" => {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        "Reggie Evans" => {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        "Brook Lopez" => {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        "Mason Plumlee" => {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        "Jason Terry" => {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      }
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien" => {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        "Bismak Biyombo" => {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        "DeSagna Diop" => {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        "Ben Gordon" => {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        "Brendan Haywood" => {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      }
    }
  }
end

def home_team_name
  game_hash[:home][:team_name]
end

def num_points_scored(player_name)
  home = game_hash[:home][:players]
  away = game_hash[:away][:players]

  player = home[player_name] || away[player_name]
  player[:points]
end

def shoe_size(player_name)
  home = game_hash[:home][:players]
  away = game_hash[:away][:players]

  player = home[player_name] || away[player_name]
  player[:shoe]
end

def titlecase(array)
  array.map do |item|
    item[0].upcase + item[1..-1]
  end
end

def team_colors(team_name)
  home = game_hash[:home]
  away = game_hash[:away]

  colors = if home[:team_name] == team_name
    home[:colors]
  else
    away[:colors]
  end

  titlecase(colors)
end

def team_names
  game_hash.map do |team, nested_hash|
    nested_hash[:team_name]
  end
end

def player_numbers(team_name)
  home = game_hash[:home]
  away = game_hash[:away]

  which_team = home[:team_name] == team_name ? home : away

  which_team[:players].map do |player_name, player_hash|
    player_hash[:number]
  end
end

def player_stats(players_name)
  game_hash.each do |team_name, nested_hash|
    nested_hash[:players].each do |player_name, player_stats|
      if players_name == player_name
        player_stats.delete(:player_name)
        return player_stats
      end
    end
  end
end

def big_shoe_rebounds
  big_guy = nil
  game_hash.each do |team_name, nested_hash|
    nested_hash[:players].each do |player_name, player_stats|
      if big_guy == nil || player_stats[:shoe] > big_guy[:shoe]
        big_guy = player_stats
      end
    end
  end
  big_guy[:rebounds]
end
