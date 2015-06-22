module.exports = function(robot) {
    robot.respond(/open the pod bay doors/i, function(msg)
    {
        msg.reply("I'm afraid I can't let you do that.");
    });

    robot.respond(/hi/i, function(msg)
    {
        msg.reply("hi");
    });

    robot.respond(/hello/i, function(msg)
    {
        msg.reply("hi");
    });

    robot.respond(/good morning/i, function(msg)
    {
        msg.reply("morning");
    });

    robot.respond(/thanks/i, function(msg)
    {
        msg.reply("you're welcome");
    });

    robot.respond(/.*thank.*you/i, function(msg)
    {
        msg.reply("you're welcome");
    });

    robot.hear(/cake/i, function(msg)
    {
        msg.send("quick. someone give Han some cake");
    });
}
