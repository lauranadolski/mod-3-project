require 'httparty'
class Score < ApplicationRecord
  belongs_to :user

  require 'httparty'
  
  url = 'https://api.spotify.com/v1/search?type=artist&q=tycho'
  response = HTTParty.get(url)
  response.parsed_response


end
