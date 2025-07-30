const express = require("express");
const route = express.Router();
const users = require("../models/Vehicle");

//Insert 
route.post("/", async (req, res) => {
    try {
        const user = new users(req.body);
        await user.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//View 
route.get("/", async (req, res) => {
    try {
        const User = await users.find();
        res.status(200).json(User)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Single View
route.get("/", async (req, res) => {
    try {
        const user = await users.findById(req.params.id);
        if (!user) return res.status(400).json({ message: "Users not found" });
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Update
route.put("/:id", async (req, res) => {
    try {
        const user = await users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(400).json({ message: "users not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Delete
route.delete("/:id", async(req,res)=>{
    try {
        const user = await users.findByIdAndDelete(req.params.id);
        if(!user) return res.status(400).json({message:"user not found"});
        res.json({message:"user deleted"});
    }
    catch(err) {
        res.status(400).json({error:err.message});
    }
});

module.exports = route;