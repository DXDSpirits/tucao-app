$(function() {
    var TweetList = MeiweiApp.CollectionView.extend({
        ModelView: MeiweiApp.ModelView.extend({
            template: TPL['tweet-box'],
            className: 'tweet-list-item well well-xs',
            initModelView: function() {
                var self = this;
                this.$el.hammer().on('tap', 'footer', function(e) {
                    MeiweiApp.setMessage({'tweet': self.model.id});
                    var webView = new steroids.views.WebView("index-tweet-detail.html");
                    var animation = new steroids.Animation("slideFromBottom");
                    steroids.layers.push({view: webView, animation: animation});
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
    	events: {},
    	initPage: function() {
    	    steroids.view.navigationBar.show("共鸣");
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
            return;
            if (document.hidden) {
                this.$('.tweet-list-item').addClass('invisible');
            } else {
                this.$('.tweet-list-item').removeClass('invisible');
            }
        },
    	render: function() {
    	    var keywords = MeiweiApp.getMessage();
    	    keywords = _.isEmpty(keywords) ? ['老师', '地铁'] : keywords;
    	    var tweets = _.filter(INSTANCE.tweets, function(tweet) {
    	        return !_.isEmpty(_.intersection(keywords, tweet.tags));
    	    });
	        this.tweets.reset(_.isEmpty(tweets) ? INSTANCE.tweets : tweets);
    	}
    }))({el: $("#view-explore")});
});
