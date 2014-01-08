$(function() {
    MeiweiApp.Pages.Home = new (MeiweiApp.PageView.extend({
    	initPage: function() {
    	    steroids.view.navigationBar.show("吐槽神器");
    	    this.$('.cat-icon').addClass('invisible');
            this.initButtons();
            this.initEvents();
    	},
    	initButtons: function() {
            var leftButton = new steroids.buttons.NavigationBarButton();
            var rightButton = new steroids.buttons.NavigationBarButton();
            var imageButton = new steroids.buttons.NavigationBarButton();
            leftButton.title = "Back";
            rightButton.onTap = function() {
                var profileView = new steroids.views.WebView("/index-profile.html");
                steroids.layers.push(profileView);
            };
            rightButton.title = "Right";
            imageButton.imagePath = "/assets/img/icons/search@2x.png";
            steroids.view.navigationBar.setButtons({
                left : [leftButton],
                right : [rightButton, imageButton]
            });
    	},
    	initEvents: function() {
    	    var self = this;
    	    this.$('.tweet-btn-next').hammer().on('tap', function(e) {
    	        var webView = new steroids.views.WebView("/index-explore.html");
                steroids.layers.push(webView);
    	    });
    	},
    	onVisibilityChange: function() {
    	    if (document.hidden) {
    	        this.$('.cat-icon').addClass('invisible');
    	    } else {
    	        this.$('.cat-icon').removeClass('invisible');
    	    }
    	},
    	render: function() {
	        
    	}
    }))({el: $("#view-home")});
});
