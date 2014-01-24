$(function() {
    var ReplyList = MeiweiApp.CollectionView.extend({
        ModelView: MeiweiApp.ModelView.extend({
            templates: {
                retweet: TPL['reply-box-retweet'],
                like: TPL['reply-box-like'],
                reply: TPL['reply-box-reply']
            },
            className: 'reply-list-item well well-xs',
            initModelView: function() {
                var self = this;
                this.$el.hammer().on('tap', function(e) {
                    MeiweiApp.setMessage({'tweet': self.model.tweet});
                    var webView = new steroids.views.WebView("index-tweet-detail.html");
                    var animation = new steroids.Animation("slideFromBottom");
                    steroids.layers.push({view: webView, animation: animation});
                });
            },
            render: function() {
                var attrs = this.model ? this.model.toJSON() : {};
                this.template = this.templates[attrs.action];
                return this.renderTemplate(attrs);
            }
        })
    });
    
    MeiweiApp.Pages.Notification = new (MeiweiApp.PageView.extend({
    	events: { },
    	initPage: function() {
    	    steroids.view.navigationBar.show("通知");
    	    this.initButtons();
            this.replies = new MeiweiApp.Collections.Replies();
            this.views = {
                replyList: new ReplyList({ collection: this.replies, el: this.$('.reply-list') })
            };
        },
        initButtons: function() {
            var rightButton = new steroids.buttons.NavigationBarButton();
            rightButton.onTap = function() { };
            //rightButton.imagePath = "/assets/img/icons/search@2x.png";
            rightButton.title = '彩蛋';
            steroids.view.navigationBar.setButtons({
                right : [rightButton]
            });
        },
        onVisibilityChange: function() {
            if (document.hidden) {
                this.$('.reply-list-item').addClass('invisible');
            } else {
                this.$('.reply-list-item').removeClass('invisible');
            }
        },
        render: function() {
            var myTweets = function(tweet) { return tweet.member.id == 1; };
            var toId = function(tweet) { return tweet.id; };
            var tweets = _(INSTANCE.tweets).filter(myTweets).map(toId);
            var replies = _.filter(INSTANCE.replies, function(reply) {
                return _.contains(tweets, reply.tweet);
            });
            this.replies.reset(replies);
        }
    }))({el: $("#view-notification")});
});
