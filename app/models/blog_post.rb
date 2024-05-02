class BlogPost < ApplicationRecord
    has_many :likes, dependent: :destroy
end
