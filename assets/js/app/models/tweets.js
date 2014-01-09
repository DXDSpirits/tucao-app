
MeiweiApp.Models.Tweet = MeiweiApp.Model.extend({});

MeiweiApp.Collections.Tweets = MeiweiApp.Collection.extend({
	model: MeiweiApp.Models.Tweet
});

var TWEETS_INSTANCE = [
    {
        content: '立即全方位你的视野，使用暴走漫画手机端即时抢阅官网更新，让暴漫出现在公车上、地铁里、课桌下，厕格间！',
        tags: ['好酷哦', '吃螃蟹的人', '一个导演的梦', '尼玛比'],
        sadness: 12389,
        member: {
            avatar: 'assets/img/avatars/4.jpg',
            name: '鬼骨孖',
            slogan: '抓了把童子口袋里的糖果'
        }
    }
];

INSTANCE.tweets = instances = _.times(10, function(n) {
    var tweet = TWEETS_INSTANCE[0];
    tweet.id = n + 1;
    return _.clone(tweet);
});
