$(function() {
    var TweetList = MeiweiApp.CollectionView.extend({
        ModelView: MeiweiApp.ModelView.extend({
            template: TPL['tweet-box'],
            className: 'tweet-list-item well well-xs',
            initModelView: function() {
                var self = this;
                this.$el.hammer().on('tap', 'footer', function(e) {
                    var webView = new steroids.views.PreviewFileView("/assets/img/avatars/5.jpg");
                    steroids.modal.show(webView);
                });
            }
        }),
        addAll: function() {
            MeiweiApp.CollectionView.prototype.addAll.call(this);
            var tpl = Mustache.compile('<h4 class="text-center">{{n}}个和你有相同遭遇的人<br>...</h4>');
            this.$el.prepend(tpl({n: this.collection.length}));
        }
    });
    
    MeiweiApp.Pages.Explore = new (MeiweiApp.PageView.extend({
    	events: {
    		
    	},
    	initPage: function() {
    	    steroids.view.navigationBar.show("寻找共鸣");
    	    this.initButtons();
    	    this.tweets = new MeiweiApp.Collections.Tweets();
    		this.views = {
    		    tweetList: new TweetList({ collection: this.tweets, el: this.$('.tweet-list') })
    		};
    	},
        initButtons: function() {
            var rightButton = new steroids.buttons.NavigationBarButton();
            rightButton.onTap = function() { };
            //rightButton.imagePath = "/assets/img/icons/search@2x.png";
            rightButton.title = '排行榜';
            steroids.view.navigationBar.setButtons({
                right : [rightButton]
            });
        },
        onVisibilityChange: function() {
            if (document.hidden) {
                this.$('.tweet-list-item').addClass('invisible');
            } else {
                this.$('.tweet-list-item').removeClass('invisible');
            }
        },
    	render: function() {
    	    var keywords = MeiweiApp.getKeywords();
    	    var tweets = _.filter(INSTANCE.tweets, function(tweet) {
    	        return !_.isEmpty(_.intersection(keywords, tweet.tags));
    	    });
	        this.tweets.reset(_.isEmpty(tweets) ? INSTANCE.tweets : tweets);
    	}
    }))({el: $("#view-explore")});
});
