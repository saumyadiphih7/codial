const express = require("express");
const usersController=require("../controllers/users.controller.js")

const router = express.Router();


router.get("/profile", usersController.profile)
router.get("/posts",usersController.posts)



module.exports = router