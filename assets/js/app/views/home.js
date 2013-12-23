$(function() {
    MeiweiApp.Pages.Home = new (MeiweiApp.PageView.extend({
    	events: {
    		
    	},
    	initPage: function() {
    	    steroids.view.navigationBar.show("吐槽神器");
            this.initButtons();
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
            rightButton.title = "Right"
            imageButton.imagePath = "/assets/img/icons/search@2x.png"
            steroids.view.navigationBar.setButtons({
                left : [leftButton],
                right : [rightButton, imageButton]
            });
    	},
    	render: function() {
	        
    	}
    }))({el: $("#view-home")});
});
