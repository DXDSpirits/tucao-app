
/********************************** Router **********************************/

MeiweiApp.history = {
    active: MeiweiApp.Pages.Home,
    stack: []
};

MeiweiApp.Router = new (Backbone.Router.extend({
    initialize: function() {
        this.route('', 'index');
    },
    index: function() {
        var index = window.INDEX;
        MeiweiApp.Pages[index].go();
        MeiweiApp.history.active = MeiweiApp.Pages[index];
    }
}));

MeiweiApp.goToPath = function(path) {
    MeiweiApp.Router.navigate(path, {trigger: true});
};

MeiweiApp.goTo = function(pageName, options) {
    var next = MeiweiApp.Pages[pageName];
    (options || (options = {})).caller = options.caller || MeiweiApp.history.active;
    if (next != MeiweiApp.history.active) {
        MeiweiApp.abortAllAjax();
        MeiweiApp.history.stack.push(MeiweiApp.history.active);
        MeiweiApp.history.active = next;
        MeiweiApp.history.active.go(options);
    }
    if (pageName == 'Home') MeiweiApp.history.stack.length = 0;
};

MeiweiApp.refreshActivePage = function() {
    MeiweiApp.history.active.refresh();
};

MeiweiApp.goBack = function() {
    MeiweiApp.abortAllAjax();
    if (MeiweiApp.history.stack.length > 0) {
        var prev = MeiweiApp.history.stack.pop();
        MeiweiApp.history.active = prev;
        MeiweiApp.history.active.showPage();
    } else if (MeiweiApp.history.active != MeiweiApp.Pages.Home) {
        MeiweiApp.history.active = MeiweiApp.Pages.Home;
        MeiweiApp.Pages.Home.go();
    }
};
