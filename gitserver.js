var http= require('http');
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/webhook', secret: 'meetingMonitor' });
var exec = require('child_process').exec;


http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('Not happening')
    console.log(err);
  })
}).listen(333)

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
    exec('cd /var/www/meetingMonitor && git pull origin master', function(err, stdout, stderr){
	console.log(err);
	console.log(stdout);
	console.log(stderr);
	console.log("couldn't do the pull , some error with credentials");
    })
})

handler.on('error', function(event){
    console.log("A issue" + event);
})

