var User = require('./models/users');

module.exports={
    register(req,res){
        var udata={
            uname:req.body.username,
            pass:req.body.password,
        }
        User.create(udata,function(err,user){
            if(err)
                res.send("Error");
            else
                res.send("Saved to db");
        })
    },
    login(req,res){
        
    }
};