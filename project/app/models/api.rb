class Api < ActiveRecord::Base

@url_array = []
  def self.urlArray
    url = 'https://api.spotify.com/v1/search?type=artist&q=tycho'
    response = HTTParty.get(url)
    url_hash << response.parsed_response

  end
