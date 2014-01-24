
MeiweiApp.Models.Tweet = MeiweiApp.Model.extend({});

MeiweiApp.Collections.Tweets = MeiweiApp.Collection.extend({
	model: MeiweiApp.Models.Tweet
});

var MEMBERS = [
    {
        id: 1,
        avatar: 'assets/img/avatars/1.jpg',
        name: '鬼骨孖',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        id: 2,
        avatar: 'assets/img/avatars/2.jpg',
        name: 'Sorya',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        id: 3,
        avatar: 'assets/img/avatars/3.jpg',
        name: '米兰达',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        id: 4,
        avatar: 'assets/img/avatars/4.jpg',
        name: '艾瑞恩',
        slogan: '抓了把童子口袋里的糖果'
    }, {
        id: 5,
        avatar: 'assets/img/avatars/5.jpg',
        name: '阿傻',
        slogan: '抓了把童子口袋里的糖果'
    }
];

var TWEETS_INSTANCE = [
    {
        content: '那些进出地铁站的奇葩们就看不到左行右立几个字吗？',
        tags: ['地铁', '奇葩']
    }, {
        content: '在地铁里吃蛋饼肉包的你可以圆润的滚出去吗',
        tags: ['地铁', '蛋饼肉包']
    }, {
        content: '好久没坐地铁了，今天下班高峰去坐了一回，还是保持进去什么姿势，出来什么姿势，果然是“与势俱进”。',
        tags: ['地铁', '下班高峰']
    }, {
        content: '各位对地铁里那种喊着“往里走让一让”却一下子自己占到位置就不管别人的家伙怎么看？我这几天天天遇到，烦也烦死了。',
        tags: ['地铁', '占到位置']
    }, {
        content: '每次回家总是坐错地铁,3号线和4号线根本分不清楚啊',
        tags: ['地铁']
    }, {
        content: '早上想了一点事情，结果错过了地铁，等到的下一班突然半路停车说有点问题，好久才搞定，我是怎么这么倒霉……',
        tags: ['地铁']
    }, {
        content: 'tnnd，一星期有10场考试，老师你们这么屌，家里人知道吗？',
        tags: ['老师', '考试']
    }, {
        content: '真搞不懂老师，你们吃不下学校的饭菜就出去吃，我们不想吃还硬逼我们吃！叫个外卖还要被抓，最后还不是自己偷偷吃！请自己先以身作则好嘛',
        tags: ['老师']
    }, {
        content: '班主任就像狗一样，天天来班级，还查卫生，真是 ， 人与人之间一点信任都没有',
        tags: ['老师', '班主任']
    }, {
        content: '零食竟然被老师没收了，还自己吃了， 简直丧心病狂',
        tags: ['老师', '零食']
    }, {
        content: '请着最不入流的老师教课，硬件设备老差，跟不上教学节奏；大一大二时，天天要上早晚自习，跟高中模式一样一样的',
        tags: ['老师', '硬件设备']
    }, {
        content: '临近考试阶段,老师不帮我们复习还上新课,一套套的考卷发现来有考虑过学生的感受吗?',
        tags: ['老师', '考试阶段']
    }, {
        content: '老师明明说好一天10个人演讲，今天居然告诉我们说要全班都结束掉',
        tags: ['老师']
    }, {
        content: '刘教授，不可以调戏咱们女友同学',
        tags: ['老师', '教授', '调戏']
    }, {
        content: 'Iphone5摔碎了，想凑合着用，试想难得摔一次，下次要小心，还琢磨这什么时候去修呢，竟然再次摔了，这次连纽扣电都摔的暴露出来了，一下子心平静了，觉得这屏幕摔的太艺术了，还真不想修了。',
        tags: ['手机', '纽扣电', 'iphone5']
    }, {
        content: '耳机接到手机上不出声音，我太郁闷了。',
        tags: ['手机', '耳机']
    }, {
        content: '这些吐槽本来想电脑发出，结果宾馆网线完全连不上，只好用手机打到蛋疼！',
        tags: ['手机', '宾馆网线', '电脑']
    }, {
        content: '三星S3，魔鬼一般的存在，什么手机！当然我摔得也太多了，我不知道该吐槽谁了……',
        tags: ['手机', '三星S3']
    }, {
        content: '我的三星S3已经慢的无法忍受了，更奇葩的是带上耳机听音乐，它会自动帮你把声音调小到完全静音……',
        tags: ['手机', '三星S3']
    }, {
        content: '操蛋的wifi，老是断线，还有三星手机的速度可以去死了吗？',
        tags: ['手机', 'wifi', '短线', '三星手机']
    }, {
        content: '我的htcG23,一天要冲三次电，真受不了。',
        tags: ['手机', '冲三次电', '的htcG23']
    }
];

INSTANCE.tweets = _.map(TWEETS_INSTANCE, function(item, n) {
    var tweet = _.clone(item);
    tweet.id = n + 1;
    tweet.member = _.clone(MEMBERS[n % 5]);
    tweet.distance = _.random(1, 5000);
    tweet.sadness = _.random(1000, 5000);
    tweet.liked = _.sample([true, false], 1)[0];
    tweet.retweeted = _.sample([true, false], 1)[0];
    return _.clone(tweet);
});
