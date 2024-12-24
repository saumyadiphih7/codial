const express = require("express");
const errorHandler = require("./utils/errorHandler");
const dotenv = require("dotenv");
const path=require("path")



dotenv.config()


const app = express();



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