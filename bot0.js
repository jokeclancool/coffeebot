var linebot = require('linebot');

var bot = linebot({
    channelId: "1506550028",
    channelSecret: "61a5028a4d00c01d7c179dcc41f849c2",
    channelAccessToken: "Dhs/TAId7FiwLOfTtzMobtuMH1qTeKMhinhMagfXxwyFGdMeiMFvU1FDMYoawd8g4gG6zA4ccoqyXTfCPQFD/V8ZY2Mgr1PKPYR+AqXqs8zD3ftNbJEGbr1Z2vX+WwuKRMsEs/zTclZy8xf2coG2IgdB04t89/1O/w1cDnyilFU="
});
var testm = function (m) {
  return m;
}

bot.on('message', function (event) {
  if( event.source.type == "user" ){
    var m = "สวัสดี "  + event.source.userId + " " + testm("test") ;
    event.reply({ type: 'text', text: m});
    return;
  }



  var test =event.message.text;
  if( test.indexOf('ckdbot') >= 0){

    var m = "สวัสดี "  + event.source.type + " " + testm("test")  ;
    event.reply({ type: 'text', text: m});

}

});



bot.on('join',     function (event) {
event.reply({ type: 'text', text: event.source.groupId});
});


bot.listen('/linebot', process.env.PORT || 3000);
