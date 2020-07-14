const userService = require("../services/user");
module.exports = {
    adduser:async function(ctx,next){
        console.log("-----------------------------------------------------");
        console.log("addUser",ctx.request.query);
        let result  = await userService.adduser(ctx.request.query);
        console.log("result",result);
        ctx.body = JSON.stringify(result);
    }
}