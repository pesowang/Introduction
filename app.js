const express=require('express')
const app = express();
const port=3000;
const exphbs=require('express-handlebars')

app.listen(port,()=>{
    console.log('hello!!!')
    })

    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");



    app.get("/", function (req, res) {
       
        res.render('index')
        });


    app.get("/member", function (req, res) {
    
        res.render('member')
        });
    app.get("/projects", function (req, res) {

        res.render('projects')
        });
    app.get("/resume", function (req, res) {

        res.render('resume')
            });
    app.get("/resume/:name", function (req, res) {
        let name=req.params.name
        let date=req.query.date
        if(name=='water'){
            res.render('water')
        }
    });
        