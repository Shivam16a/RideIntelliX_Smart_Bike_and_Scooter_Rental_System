const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//register
exports.register = async (req, res) => {
    const { name, email, password, phone, address } = req.body;
    try {
        const hashedpassword = await bcrypt.hash(password, 15);
        const user = await User.create({ name, email, password:hashedpassword, phone, address });
        res.status(201).json({ message: 'user register successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Registration fail' });
    }
};

//login 
exports.login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error:'invalid credentials'});

        const match = await bcrypt.compare(password,user.password);
          if(!match) return res.status(400).json({error:'invalid credentials'});
        

        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
         res.status(200).json({
            message: 'Login success',
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }catch(err) {
         res.status(400).json({error:'login failed'});
    }
};
//dashbord
exports.dashboard = (req,res)=>{
    res.json({message:"welcome dashboard"});
}