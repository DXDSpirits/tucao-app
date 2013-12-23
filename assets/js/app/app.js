
window.MeiweiApp = new (Backbone.View.extend({
    
    Version: 1.0,
    
    Models: {},
    Views: {},
    Collections: {},
    
    Templates: {},
    Pages: {},
    
    configs: {},
    
    start: function() {
        MeiweiApp.initView();
        Backbone.history.start();
    }
    
}))({el: document.body});

MeiweiApp.initView = function() {
    steroids.view.setBackgroundColor("#FFFFFF");
};
