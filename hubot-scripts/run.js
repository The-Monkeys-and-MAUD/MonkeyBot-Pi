// Description:
// Runs a command on hubot
// TOTAL VIOLATION of any and all security! 
// 
// Commands:
// hubot run <command> - runs a command on hubot host

module.exports = function(robot) {

  // Blink
  robot.respond("/blink/i", function(msg) {
    console.log(msg);
    var cmd = '/home/pi/MonkeyBot-Pi/Blinky/blink.sh';
    msg.send("ok, i blinked");
    var exec = require('child_process').exec;
    exec(cmd, function(error, stdout, stderr) {
      if (error) {
        msg.send(error);
        msg.send(stderr);
      } else {
        msg.send(stdout);
      }
    });
  });

  // Scary run anything - just for debug
  robot.respond("/run (.*)$/i", function(msg) {
    console.log(msg);
    var cmd = msg.match[1];
    msg.send("Running " + cmd);
    var exec = require('child_process').exec;
    exec(cmd, function(error, stdout, stderr) {
      if (error) {
        msg.send(error);
        msg.send(stderr);
      } else {
        msg.send(stdout);
      }
    });
  });
};
