const profile=async(req,res)=>{
  return res.send(`<h1>Users Profile Page</h1>`)
}


const posts = async (req, res) => {
  return res.render("post.ejs", {
    title:"posts"
  })
}
module.exports={profile,posts}