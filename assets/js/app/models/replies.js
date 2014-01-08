
MeiweiApp.Models.Reply = MeiweiApp.Model.extend({});

MeiweiApp.Collections.Replies = MeiweiApp.Collection.extend({
    model: MeiweiApp.Models.Reply
});

var REPLIES_INSTANCE = [
    {
        tweet: 1,
        action: 'retweet',
        member: {
            name: '鬼骨孖',
        }
    },
    {
        tweet: 2,
        action: 'reply',
        content: '我了个去你太牛逼了啊',
        member: {
            name: '艾瑞恩',
        }
    },
    {
        tweet: 3,
        action: 'like',
        member: {
            name: '米兰达',
        }
    },
];

INSTANCE.replies = instances = _.times(17, function(n) {
    var reply = REPLIES_INSTANCE[n % 3];
    reply.id = n + 1;
    return _.clone(reply);
});
