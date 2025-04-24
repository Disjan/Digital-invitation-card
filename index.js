import express from "express";

const app = express();
const port = 3000;
let birthdayChild = "/image/title.png";
let einladung = {};

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        ueberschrift: birthdayChild,
        ort: einladung.ort || "",
        datum: einladung.datum || "",
        uhrzeit: einladung.uhrzeit || "",
        rückmeldung: einladung.rückmeldung
    });
});

app.post("/create", (req, res) => {
    const {ort, datum, uhrzeit, rückmeldung} = req.body ;


    einladung = {
        ort,
        datum,
        uhrzeit, 
        rückmeldung
    };

    console.log("🎉Neue Einladung gespeichert:", einladung);

    res.redirect("/");
})

app.listen(port, () =>{
    console.log(`Server runing on ${port}`);
});