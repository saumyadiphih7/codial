const home = async (req, res) => {
  return res.send(`<h1>Home Page</h1>`)
}

const creator = async (req, res) => {
  return res.send(`<h1>Creator Page</h1>`)
}
module.exports = {
  home,
  creator
}