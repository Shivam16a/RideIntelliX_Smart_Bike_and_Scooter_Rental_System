const express = require('express');
const router = express.Router();
const authctrl = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const user = require('../models/Users');

router.post('/register', authctrl.register);
router.post('/login',authctrl.login);
router.get('/dashbord',authctrl.dashboard);

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

module.exports = router;