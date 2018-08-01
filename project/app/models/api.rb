class Api
  require 'net/http'
  require 'uri'

  url = 'http://localhost:3000/users'
  uri = URI.parse(url)

  params = {'name' => 'yes'}

  Net::HTTP.post_form(uri, params)
end
