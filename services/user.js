const userModel = require("../models/users");
const { reject } = require("async");
module.exports={
    adduser(userinfo){
        let user = new userModel(userinfo);
        return user.save();
    }
}