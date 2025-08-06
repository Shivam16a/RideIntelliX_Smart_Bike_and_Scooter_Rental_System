const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/db");
const VehicleRoutes = require("./routes/vehicleRoutes");
const autRoutes = require('./routes/UsersRoutes');
const booking = require('./routes/bookingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const path = require('path');
const createAdminIfNotExists = require('./admin/admin');


const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();
connectdb();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/vehicle",VehicleRoutes);
app.use("/api/auth",autRoutes);
app.use("/api/booking",booking);
app.use('/api/payment', paymentRoutes);

createAdminIfNotExists();



app.use(errorMiddleware);
const PORT = process.env.PORT || 5700;
app.listen(PORT,()=>console.log("server is running port 5700"));