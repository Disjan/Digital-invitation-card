import express from "express";

const app = express();
const port = 3000;
let birthdayChild = "/image/title.png";

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        ueberschrift: birthdayChild 
    });
});

app.listen(port, () =>{
    console.log(`Server runing on ${port}`);
});