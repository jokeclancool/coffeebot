var linebot = require('linebot');

var bot = linebot({
    channelId: "1507252630",
    channelSecret: "7a34633dcf0bf2132463682c226d6633",
    channelAccessToken: "9pnEWl9BaXKZz0GhxcccudVVl5fSVFcK4jSPGZMcfB+dAm9N2kinxjFGuu4/a8dlJKmE6JzSAZMuJxsReqlW7KDSHs3Nk/JUnZAQ/FCIPKdh9GJR3dAGT0IcaI/EtAEQs7+L7/NKH3zzyIoU5BSvdAdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function (event) {
    event.reply(event.message.text).then(function (data) {
      console.log("message success");
        // success
    }).catch(function (error) {
        // error
        console.log("message error");

    });
});



bot.listen('/linewebhook', process.env.PORT || 3000);
