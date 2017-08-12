//模板
var SingleView = Backbone.View.extend({
    el: "#single_content",
    initialize: function() {},
    render: function(context) {
        //使用underscore这个库，来编译模板
        var template = _.template($("#single_template").html());
        //加载模板到对应的el属性中
        $(this.el).html(template(context));
    },
});
var singleView = new SingleView;

//获取数据
var SingleResult = Backbone.Collection.extend({
    url: '/api/quota/quota_used_record/11/quota_bill'
});
var singleResult = new SingleResult;
singleResult.fetch({
    success: function(collection, response, options) {
        singleView.render({ result: response.data });

    },
    error: function(collection, response, options) {
        //错误提示
    }
});

//模板
var LoopView = Backbone.View.extend({
    el: "#loop_content",
    initialize: function() {},
    render: function(context) {
        //使用underscore这个库，来编译模板
        var template = _.template($("#loop_template").html());
        //加载模板到对应的el属性中
        $(this.el).html(template(context));
    },
});
var loopView = new LoopView;

//获取数据
var LoopResult = Backbone.Collection.extend({
    url: '/api/quota/quota_bill/2/repayment'
});
var loopResult = new LoopResult;
loopResult.fetch({
    success: function(collection, response, options) {
        //判断是否json数组
        if (Array.isArray(response.data)) {
            loopView.render({ result: response.data });
        } else {
            loopView.render({ result: [response.data] });
        }

    },
    error: function(collection, response, options) {
        //错误提示
    }
});