module.exports = function(robot) {
    robot.respond(/blink/i, function(msg){

	var spawn = require('child_process').spawn,
	blink  = spawn('/home/pi/MonkeyBot-Pi/responders/blink.sh');

	console.log('Spawned child pid: ' + blink.pid);
	blink.stdin.end();

        msg.reply("blinking!");
    });
}
