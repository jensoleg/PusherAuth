var Pusher = require( 'pusher' );
var express = require("express");
var app = express();

app.configure(function(){
    app.use(express.bodyParser());
});
app.enable("jsonp callback", true);

app.use(express.logger());

var pusher = new Pusher( { appId: 53733, key: 'bc34941c47e130e926a6', secret:'fc3815584f420524a234' } );

app.get('/pusher/auth', function(req, res) {
    var socketId = req.query.socket_id;
    var channel = req.query.channel_name;
    var auth = pusher.auth( socketId, channel );
    res.jsonp( auth );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
