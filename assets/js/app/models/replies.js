
MeiweiApp.Models.Reply = MeiweiApp.Model.extend({});

MeiweiApp.Collections.Replies = MeiweiApp.Collection.extend({
    model: MeiweiApp.Models.Reply
});

var MEMBERS = [
    {
        avatar: 'assets/img/avatars/1.jpg',
        name: '鬼骨孖',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        avatar: 'assets/img/avatars/2.jpg',
        name: 'Sorya',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        avatar: 'assets/img/avatars/3.jpg',
        name: '米兰达',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        avatar: 'assets/img/avatars/4.jpg',
        name: '艾瑞恩',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        avatar: 'assets/img/avatars/5.jpg',
        name: '阿傻',
        slogan: '抓了把童子口袋里的糖果'
    }
];

var REPLIE_CONTENTS = [
    '我了个去你太牛逼了啊',
    '帕帕，我抓拍滴不错吧，有潜力进军摄影界～',
    '转发本条微博并AT你身边的屌丝女神，说出一个TA夸张的屌丝行为，就有机会获得奥蜜思蒸汽泡泡面膜一份！',
    '黑松露为散发著特殊的气味，自古便有许多人为之着迷。其身价与鱼子酱、鹅肝酱等高级美食并列，号称美食三大天王',
    '据称这一技术到2050年达到成熟，由于成本低廉，过几年换一套也不在话下',
    '在已汇走2万元的情况下，沈阳谢大爷被骗子电话操控，冲破各种阻拦，执意继续汇款',
    '魔都的吃货们，水货要来啦！这水货跟手机可没关系',
    '金轩餐厅后，推出了不少新菜，昨日有幸抢先品尝了黄师傅的新作品。'
];

INSTANCE.replies = _.shuffle(_.times(100, function(n) {
    var reply = {};
    reply.tweet = n % 21 + 1;
    reply.id = n + 1;
    reply.member = _.clone(MEMBERS[n % 5]);
    reply.action = _.sample(['reply', 'retweet', 'reply', 'like', 'reply'], 1)[0];
    if (reply.action == 'reply') {
        reply.content = _.sample(REPLIE_CONTENTS, 1)[0];
    }
    return _.clone(reply);
}));
