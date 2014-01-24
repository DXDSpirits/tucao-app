$(function() {
    var TweetBox = MeiweiApp.ModelView.extend({
        template: TPL['tweet-box']
    });
    
    var ReplyList = MeiweiApp.CollectionView.extend({
        ModelView: MeiweiApp.ModelView.extend({
            templates: {
                retweet: TPL['reply-box-retweet'],
                like: TPL['reply-box-like'],
                reply: TPL['reply-box-reply']
            },
            className: 'reply-list-item well well-xs',
            render: function() {
                var attrs = this.model ? this.model.toJSON() : {};
                this.template = this.templates[attrs.action];
                return this.renderTemplate(attrs);
            }
        })
    });
    
    MeiweiApp.Pages.TweetDetail = new (MeiweiApp.PageView.extend({
    	events: { },
    	initPage: function() {
    		steroids.view.navigationBar.show("遭遇详情");
    		this.tweet = new MeiweiApp.Models.Tweet();
            this.replies = new MeiweiApp.Collections.Replies();
            this.views = {
                tweetBox: new TweetBox({ model: this.tweet, el: this.$('.tweet-list-item') }),
                replyList: new ReplyList({ collection: this.replies, el: this.$('.reply-list') })
            };
    	},
    	render: function() {
            var message = MeiweiApp.getMessage();
            var tweetId = message.tweet || 1;
            var replies = _.filter(INSTANCE.replies, function(reply) {
                return reply.tweet == tweetId;
            });
            var tweet = _.find(INSTANCE.tweets, function(tweet) {
                return tweet.id == tweetId;
            });
            this.tweet.set(tweet);
            this.replies.reset(replies);
    	}
    }))({el: $("#view-tweet-detail")});
});
