const express = require("express"); //라이브서버??
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());
mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("몽고db랑 연결이 되었습니다."))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(4810, () => {
    console.log("backend is running");
});
