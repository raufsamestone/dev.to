module DataSync
  module Elasticsearch
    class User
      RELATED_DOCS = %i[
        articles
        reactions
        podcast_episodes
        chat_channel_memberships
        comments
      ].freeze

      attr_accessor :user, :updated_fields

      delegate :articles, :chat_channel_memberships, :comments, to: :@user

      def initialize(user, updated_fields)
        @user = user
        @updated_fields = updated_fields.deep_symbolize_keys
      end

      def sync_documents
        return unless sync_needed?

        RELATED_DOCS.each do |relation_name|
          send(relation_name).find_each(&:index_to_elasticsearch)
        end
      end

      private

      def sync_needed?
        updated_fields.slice(:username, :name, :pro, :profile_image_url).any?
      end

      def reactions
        user.reactions.readinglist
      end

      def podcast_episodes
        PodcastEpisode.for_user(user)
      end
    end
  end
end
