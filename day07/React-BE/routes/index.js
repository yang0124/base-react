var express = require('express');
var router = express.Router();
var notifyModel = require('../models/notifyModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/notify', function(req, res, next) {
  new notifyModel({
      'title':'【3】澳演员在脸书为大火筹款 6 天募集 3200 万美元创历史',
      'intro':`北京时间 1 月 9 日早间消息，澳大利亚喜剧演员 Celeste Barber 近日通过 Facebook 筹集到了
      3200 万美元善款，用于对抗该国愈演愈烈的森林大火，而这一筹款数量也创造了平台之最 ... `,
      'isRead':false
  }).save().then((res)=>{
    console.log(res)
  })
});


router.get('/note/list', function(req, res, next) { //下发通知中心列表数据
  notifyModel.find().then((result)=>{
    res.send({
      code:1,
      msg:'加载成功',
      data:result
    })
  })
});

router.get('/note/read', function(req, res, next) { //下发通知中心列表数据
  let {id} = req.query;
  notifyModel.update({_id:id},{isRead:true}).then((result)=>{
    res.send({
      code:1,
      msg:'更新成功'
    })
  })
});
module.exports = router;
