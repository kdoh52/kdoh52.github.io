module.exports = (app) => {

    app.get("/", (req, res) => {
    //   res.render("login");
    res.send("hi");
    });
  
};
  