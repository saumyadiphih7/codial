const profile=async(req,res)=>{
  return res.send(`<h1>Users Profile Page</h1>`)
}


const posts = async (req, res) => {
  return res.send(`<h1>Users posts</h1>`)
}
module.exports={profile,posts}