const express = require("express");
const errorHandler = require("./utils/errorHandler");
const dotenv = require("dotenv");
const path = require("path")
const cookieParser=require("cookie-parser")



dotenv.config()


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
// import routes

const router = require("./routes/index.js")
app.use("/",router)



app.use(errorHandler)


const port=process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});