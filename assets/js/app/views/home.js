$(function() {
    MeiweiApp.Pages.Home = new (MeiweiApp.PageView.extend({
        events: {
            'focus .tags input': 'showTagsList',
            'click .tags-list': 'closeTagsList'
        },
    	initPage: function() {
    	    this.$('.cat-icon').addClass('invisible');
            this.initEvents();
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
