const profile=async(req,res)=>{
  return res.send(`<h1>Users Profile Page</h1>`)
}


const posts = async (req, res) => {
  return res.render("post.ejs", {
    title:"posts"
  })
}


const userSignUp = async (req, res) => {
  console.log(req.cookies);
  res.cookie("user_id", 25)
   
  
  return res.render("user.sign_up.ejs", {
    title:"signUp"
  })
}

const userSignIn = async (req, res) => {
   
  return res.render("user.sign_in.ejs", {
    title: "signIn",
  });
};

const userCreate = async (req, res) => {
 //Todo
}


module.exports = { profile, posts, userSignUp, userSignIn };