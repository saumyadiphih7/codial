const express = require("express");
const usersController=require("../controllers/users.controller.js")

const router = express.Router();


router.get("/profile", usersController.profile)
router.get("/posts", usersController.posts)
router.get("/sign_up", usersController.userSignUp)
router.get("/sign_in", usersController.userSignIn)



module.exports = router