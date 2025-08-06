const bcrypt = require("bcryptjs");
const User = require("../models/Users");

const createAdminIfNotExists = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.warn(" Admin credentials not set in .env file");
      return;
    }

    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await User.create({
        name: "Ride Shivam",
        email: adminEmail,
        password: hashedPassword,
        phone: "8002632535",
        address: "Bihar Patna",
        role: "admin",
      });

      console.log(" Admin user created successfully.");
    } else {
      console.log(" Admin user already exists.");
    }
  } catch (error) {
    console.error(" Error creating admin user:", error.message);
  }
};

module.exports = createAdminIfNotExists;
