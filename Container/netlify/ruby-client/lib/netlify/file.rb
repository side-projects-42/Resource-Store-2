module Netlify
  class File < Model
    fields :id, :path, :sha, :mime_type, :size
  end
end