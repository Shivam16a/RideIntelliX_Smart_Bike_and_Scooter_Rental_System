const express = require('express');
const router = express.Router();
const authctrl = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const user = require('../models/Users');

router.post('/register', authctrl.register);
router.post('/login',authctrl.login);
router.get('/dashbord',authctrl.dashboard);

router.get('/me', authMiddleware.protect, (req, res) => {
    res.status(200).json(req.user); // `req.user` is set in protect middleware
});


router.get("/reg-user", async (req, res) => {
    try {
        const User = await user.find({
            name: { $exists: true, $ne: "" },
            email: { $exists: true, $ne: "" },
            phone: { $exists: true, $ne: "" },
            address: { $exists: true, $ne: "" }
        }).select("-password");
        res.status(200).json(User)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// update user by id
router.put('/update-user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedUser = await user.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: "Failed to update user" });
    }
});


module.exports = router;