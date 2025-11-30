const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connect successful to database");
    } catch (err) {
        console.log("MongoDB connection failed:", err.message);
    }
};

module.exports = connectdb;
