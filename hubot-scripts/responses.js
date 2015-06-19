module.exports = function(robot) {
    robot.respond(/open the pod bay doors/i, function(msg){

        msg.reply("I'm afraid I can't let you do that.");
    });

    robot.hear(/cake/i, function(msg){

        msg.send("quick. someone give Han some cake");
    });
}
