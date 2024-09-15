const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");
var methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
let data = require("./data/data.js");
const app = express();



app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));


app.engine("ejs" , ejsMate);
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));
app.use(express.static(path.join(__dirname , "/public"))) ;



app.get("/users" , (req , res) => {
    res.render("post.ejs" , {data});
})

app.get("/users/new" , (req , res) => {
    res.render("new.ejs");
});



//Add New user or name ye hai post jo ki dd kar raha naya posts wala route par 
app.post("/users" , (req , res) => {
        let {name , adhar, content} = req.body;
        let id = uuidv4();
        data.push({ id , name ,  adhar ,  content});
        
        res.redirect("/users");
        
        
})

//show route id ke hisab se
app.get("/users/:id" , (req , res) => {
    let {id} = req.params;
    let Singledata = data.find((dat) => 
        id == dat.id
    )
    res.render("show.ejs" , {Singledata})
});

app.get("/users/:id/edit" , (req , res ) => {
    let {id} = req.params;
    let Singledata = data.find((dat) => 
        id == dat.id
    )
    console.log(Singledata)
    res.render("edit.ejs" , {Singledata})
       
})


app.patch("/users/:id" , (req , res) => {
    let {id} = req.params;
     let newContent = req.body.content;
     
    let Singledata = data.find((dat) => 
        id == dat.id
    )

    Singledata.content = newContent;
    res.redirect("/users");
    
    
})


app.delete("/users/:id" , (req , res) => {
    let {id} = req.params;
    let Singledata = data.find((dat) => 
        id == dat.id
    )
    data = data.filter((dat) => id !== dat.id);
    console.log(data);
    res.redirect("/users");

})


//this will tell that your servere is activated at port and ready to recieve request
app.listen(3000 , () => {
    console.log(`Server has started at Port 3000`);
})