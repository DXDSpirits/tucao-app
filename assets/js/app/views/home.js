$(function() {
    MeiweiApp.Pages.Home = new (MeiweiApp.PageView.extend({
        events: {
            'focus .tags input': 'showTagsList',
            'click .tags-list': 'closeTagsList'
        },
    	initPage: function() {
    	    this.$('.cat-icon').addClass('invisible');
    	    steroids.view.navigationBar.show("吐槽神器");
    	    this.initButtons();
            this.initEvents();
    	},
    	initEvents: function() {
    	    var self = this;
    	    this.$('.tweet-btn-next').hammer().on('tap', function(e) {
    	        var webView = new steroids.views.WebView("/index-explore.html");
                steroids.layers.push(webView);
    	    });
    	},
        initButtons: function() {
            var leftButton = new steroids.buttons.NavigationBarButton();
            var rightButton = new steroids.buttons.NavigationBarButton();
            leftButton.title = "资料";
            rightButton.title = "通知";
            rightButton.onTap = function() {
                var webView = new steroids.views.WebView("/index-notification.html");
                steroids.layers.push(webView);
            };
            leftButton.onTap = function() {
                var webView = new steroids.views.WebView("/index-profile.html");
                steroids.layers.push(webView);
            };
            steroids.view.navigationBar.setButtons({
                left : [leftButton],
                right : [rightButton]
            });
        },
    	onVisibilityChange: function() {
    	    if (document.hidden) {
    	        this.$('.cat-icon').addClass('invisible');
    	    } else {
    	        this.$('.cat-icon').removeClass('invisible');
    	    }
    	},
    	showTagsList: function() {
    	    this.$('.tags-list').animate({ height: 80 });
    	},
        closeTagsList: function() {
            this.$('.tags-list').animate({ height: 0 });
        },
    	render: function() {
	        
    	}
    }))({el: $("#view-home")});
});
