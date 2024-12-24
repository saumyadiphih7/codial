const express = require("express")
const homeController = require("../controllers/home.controller")

const router = express.Router()


router.get("/", homeController.home)
router.get("/creator", homeController.creator)

//import users routes
router.use("/users", require("./users"))


module.exports = router