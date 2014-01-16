$(function() {
    MeiweiApp.Pages.Home = new (MeiweiApp.PageView.extend({
        events: {},
    	initPage: function() {
    	    //this.$('.cat-icon').addClass('invisible');
    	    _.bindAll(this, 'toExplore', 'showTagsList', 'closeTagsList', 'getInspirated');
    	    steroids.view.navigationBar.show("吐槽神器");
    	    this.initButtons();
            this.initEvents();
    	},
    	initEvents: function() {
    	    var self = this;
    	    this.$('.tweet-btn-next').hammer().on('tap', this.toExplore);
    	    this.$('.tags input').hammer().on('tap', this.showTagsList);
    	    this.$('.tags-list .tag').hammer().on('tap', this.closeTagsList);
    	    this.$('.inspirations span').hammer().on('tap', this.getInspirated);
    	    this.$('.camera').hammer().on('tap', function() {
    	        navigator.camera.getPicture(function(){}, function(){}, {
    	            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    	        });
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
    	toExplore: function(e) {
    	    var keywords = this.$('.tags input').val().split();
    	    MeiweiApp.setKeywords(keywords);
    	    var webView = new steroids.views.WebView("/index-explore.html");
            steroids.layers.push(webView);
    	},
    	getInspirated: function(e) {
    	    var text = $(e.target).text();
    	    this.$('.tweet-form textarea').text('#' + text + ' ');
    	    this.$('.tags input').val(text);
    	},
    	showTagsList: function() {
    	    this.$('.tweet-form textarea').attr('disabled', 'disabled');
    	    var keywords = this.$('.tags input').val();
    	    if (keywords[keywords.length - 1] != ' ') this.$('.tags input').val(keywords + ' '); 
    	    this.$('.tags-list').animate({ height: 110 });
    	},
        closeTagsList: function(e) {
            var text = $(e.target).text();
            var keywords = this.$('.tags input').val();
            this.$('.tags input').val(keywords + text);
            var self = this;
            this.$('.tags-list').animate({ height: 0 }, 500, function() {
                self.$('.tweet-form textarea').removeAttr('disabled');
            });
        },
    	render: function() {
	        
    	}
    }))({el: $("#view-home")});
});
