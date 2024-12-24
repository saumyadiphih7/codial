const express = require("express");
const errorHandler = require("./utils/errorHandler");
const dotenv = require("dotenv");



dotenv.config()


const app = express();

// import routes

const router = require("./routes/index.js")
app.use("/",router)



app.use(errorHandler)


const port=process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});