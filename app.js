const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const path = require("path");
const livereload = require("livereload");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.set('views', 'views');

app.set('view engine', 'ejs');
app.use(express.json())
const userLogIn = {usernameLogIn: "" }
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
const JWT_SECRET = "jsfdghaghgfkhv4352445tfghs3413ugfsvhydutg&#@!$*@#&$#$@$ywfggb344234hew34254ghrsgfajg"
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://amar:amarxx@cluster0-shard-00-00.y55up.mongodb.net:27017,cluster0-shard-00-01.y55up.mongodb.net:27017,cluster0-shard-00-02.y55up.mongodb.net:27017/all-date?ssl=true&replicaSet=atlas-zssrz9-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const Game = require("./models/gameSchema");
const User = require("./models/user");
const comment = require("./models/comment");
app.get("/", (req, res) => {
  res.redirect("/Electric");

});
app.get("/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093/add", (req, res) => {
  res.render("add", { mytitle: "add a game" });
});
app.get("/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093/addImage", (req, res) => {
  res.render("add-img", { mytitle: "how to add img" });
});
app.get("/social", (req, res) => {
  res.render("social", { mytitle: "social" });
});
app.get("/Electric", (req, res) => {
  Game.find()
    .then((result) => {
      res.render("index", { mytitle: "Electric", result: result });
      console.log("All its Done !!!!!", userLogIn.usernameLogIn);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/Electric/:id", (req, res) => {
  Game.findById(req.params.id).then((result) => {
    

comment.find().then((resultCom) => {
  res.render("gamePage", { mytitle: result.name, objgame: result , username: userLogIn.usernameLogIn  , resultCom: resultCom  });
}).catch((err) => {
console.log(err)
})
  }).catch((err) => {
    console.log(err);
  });
});

app.post("/api/comment", (req, res) => {
  
console.log(req.body)
new comment({num: req.body.num ,comment: req.body.comment , username: req.body.username}).save().then((result) => {
console.log("comment created");
 }).catch()

})
app.get("/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093/:id", (req, res) => {
  Game.findById(req.params.id).then((result) => {
    res.render("GamePageAdmin", { mytitle: result.name, objgame: result });
  });
});
app.get("/login", (req, res) => {
  res.render("login", { mytitle: "log in" });
});
app.get("/register", (req, res) => {
  res.render("register", { mytitle: "register" });
});

app.use(bodyParser.json());
app.post("/api/register", async (req, res) => {
  const { username, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);


   User.findOne({username: username}).then((result) => {

if (username == 'admin') {
  res.json({message: "username in use" , mylink: "/register"})
} else {
  if (result == null) {
    new User({username , password}).save().then((result) => {
      res.json({message: "username created successfully" , mylink: "/login"})
      
     }).catch()
    }else{
      res.json({message: "username in use" , mylink: "/register"})
    }
}
})
})


app.post("/api/login" , async   (req,res) => {
  const  {username , password} =  await req.body
const user =  User.findOne({username: username}).then((result) => {

if (username == "admin") {
 if(password == "admingg"){
  res.json({message: "logged in successfully",mylink:"/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093", success: "success"})
 }
} else {
  if (result == null) {
    return  res.json({message: "username not find", success: "not success"})
  } 
  const gg = async () =>  {
   
    if (await bcrypt.compare(password, result.password)) {
      res.json({message: "logged in successfully",mylink:"/", username: result.username , success: "success"})
      userLogIn.usernameLogIn = result.username
      console.log(userLogIn)
  } else {res.json({message: "password not true", success: "not success"})}}   


  gg()
}

})

})





















app.post("/api/search", async (req, res) => {
let payload = req.body.payload.trim()
let search = await Game.find({name: {$regex: new RegExp("^"+payload+".*","i")}}).exec()
search = search.slice(0, 10);
res.send({payload: search  })
})
app.get(
  "/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093",
  (req, res) => {
    Game.find()
      .then((result) => {
        res.render("admin", { mytitle: "Electric Admin", result: result });

        console.log("All its Done !!!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

app.post("/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093/add", (req, res) => {
  const game = new Game(req.body);

  // console.log(req.body);

  game
    .save()
    .then((result) => {
      res.redirect("/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.delete("/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093/:id", (req, res) => {
  Game.findByIdAndDelete(req.params.id)
    .then((params) => {
      res.json({ mylink: "/kghakgdhghagjokghdkgaolhghdjlkhjurygwuw45897y5467ty093" });
    })
    .catch((err) => {
      console.log(err);
    });
});





app.use((req, res) => {
  res.render("404" , {mytitle: "404"})
});
