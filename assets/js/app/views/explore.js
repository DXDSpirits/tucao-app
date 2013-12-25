$(function() {
    var TWEETS_INSTANCE = [
        {
            content: '立即全方位你的视野，使用暴走漫画手机端即时抢阅官网更新，让暴漫出现在公车上、地铁里、课桌下，厕格间！',
            tags: [],
            sadness: 12389,
            member: {
                avatar: 'assets/img/avatars/4.jpg',
                name: '鬼骨孖',
                slogan: '抓了把童子口袋里的糖果'
            }
        }
    ];
    
    var TweetList = MeiweiApp.CollectionView.extend({
        ModelView: MeiweiApp.ModelView.extend({
            template: TPL['tweet-box'],
            className: 'tweet-list-item container',
            initModelView: function() {
                var self = this;
                this.$el.hammer().on('tap', '', function(e) {
                    var webView = new steroids.views.PreviewFileView("/assets/img/avatars/5.jpg");
                    steroids.modal.show(webView);
                });
            }
        })
    });
    
    MeiweiApp.Pages.Explore = new (MeiweiApp.PageView.extend({
    	events: {
    		
    	},
    	initPage: function() {
    	    this.tweets = new MeiweiApp.Collections.Tweets();
    		this.views = {
    		    tweetList: new TweetList({ collection: this.tweets, el: this.$('.tweet-list') })
    		};
    	},
        onVisibilityChange: function() {
            if (document.hidden) {
                this.$('.tweet-list-item').addClass('invisible');
            } else {
                this.$('.tweet-list-item').removeClass('invisible');
            }
        },
    	render: function() {
    	    var instances = _.times(10, function(n) {
    	        return TWEETS_INSTANCE[0];
    	    });
	        this.tweets.reset(instances);
    	}
    }))({el: $("#view-explore")});
});
