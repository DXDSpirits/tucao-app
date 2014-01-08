$(function() {
    var ReplyList = MeiweiApp.CollectionView.extend({
        ModelView: MeiweiApp.ModelView.extend({
            templates: {
                retweet: TPL['reply-box-retweet'],
                like: TPL['reply-box-like'],
                reply: TPL['reply-box-reply']
            },
            className: 'reply-list-item well well-xs',
            render: function() {
                var attrs = this.model ? this.model.toJSON() : {};
                this.template = this.templates[attrs.action];
                return this.renderTemplate(attrs);
            }
        })
    });
    
    MeiweiApp.Pages.Notification = new (MeiweiApp.PageView.extend({
    	events: {
    		
    	},
    	initPage: function() {
            this.replies = new MeiweiApp.Collections.Replies();
            this.views = {
                replyList: new ReplyList({ collection: this.replies, el: this.$('.reply-list') })
            };
        },
        onVisibilityChange: function() {
            if (document.hidden) {
                this.$('.reply-list-item').addClass('invisible');
            } else {
                this.$('.reply-list-item').removeClass('invisible');
            }
        },
        render: function() {
            this.replies.reset(INSTANCE.replies);
        }
    }))({el: $("#view-notification")});
});
