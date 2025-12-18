
const ProductRoute = require("./routes/ProductRoute");
const cors=require("cors");


const express=require("express");
const app=express();
const dotenv=require("dotenv");
const connectDB=require("./config/db.js");
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api", ProductRoute);

const PORT = (process.env.PORT || "5000").toString().trim();

const server = app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running on port ${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please close the process using it and try again.`);
        process.exit(1);
    } else {
        console.error('Server failed to start:', err);
        process.exit(1);
    }
});