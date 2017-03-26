var app = require("express")();
var bodyParser = require("body-parser");
var request = require("request");
var async = require("async");

app.set("port", (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/bot', function(req, res){
res.send('ok');

});

app.post('/bot', function(req, res){
res.send('ok');

});



app.post("/callback", function(req, res) {
	async.waterfall([function(callback) {
	    if(req.body.result) {
	        console.log(JSON.stringify(req.body.result));
            var content = req["body"]["result"][0]["content"];
            if (content.contentType === 1) {
                var text = content.text;
                var result = "OK" + text;

                callback(null, content.from, result);
            }
        }
	}], function(err, from, result) {		// LINE BOT
		if(err) return;
		var headers = {
			"Content-Type" : "application/json; charset=UTF-8",
			"X-Line-ChannelID" : '1507252630',
			"X-Line-ChannelSecret" : '7a34633dcf0bf2132463682c226d6633',
			"X-Line-Trusted-User-With-ACL" : "u2afb999e3edca3a1c338f8dace9ad449"
		};
		var data = {
			"to": [from],
			"toChannel": 1383378250,
			"eventType":"138311608800106203",
			"content": {
				"contentType":1,
				"toType":1,
				"text": result
			}
		};
		var options = {
			url: "https://trialbot-api.line.me/v1/events",
			headers: headers,
			json: true,
			body: data
		};
		request.post(options, function(err, res, body) {
			if (!err && res.statusCode == 200) {
				console.log(JSON.stringify(body));
			} else {
				console.log("error: "+ JSON.stringify(res));
			}
		});
	});
});

app.listen(app.get("port"), function() {
	console.log("Node app is running");
});
