class UserSerializer < ActiveModel::Serializer
  has_many :scores
  attributes :points, :comments
end
