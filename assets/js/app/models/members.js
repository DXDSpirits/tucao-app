
MeiweiApp.Models.Profile = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/members/profile/',
});

MeiweiApp.Models.Member = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/members/member/',
});

MeiweiApp.me = new (MeiweiApp.Models.Member.extend({
	initialize: function() {
		this.profile = new MeiweiApp.Models.Profile(this.get('profile'));
		this.on('change:profile', function() {
            this.profile.set(this.get('profile'));
        }, this);
	}
}));
