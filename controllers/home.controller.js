const home = async (req, res) => {
  return res.render("home.ejs", {
    title:"Home"
  })
}

const creator = async (req, res) => {
  return res.send(`<h1>Creator Page</h1>`)
}
module.exports = {
  home,
  creator
}