const express = require("express");

const app = express();

const db = require("./db");

// ! Middleware for JSON Parsing

app.use(express.json());
// preprocessing the request
app.use(express.urlencoded({ extended: true }));

app.listen(5060, () => {
  console.log("server started at port 5060");
});

app.get("/mobiles", (req, res) => {
  // res.send("GET Method Success");
  db.getMobiles()
    .then((mobiles) => {
      res.send(mobiles);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/mobiles", (req, res) => {
  // res.send("POST Method Success");
  db.addMobile(req.body.name, req.body.price, req.body.ram, req.body.storage)
    .then(() => {
      res.send(req.body);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put("/mobiles", (req, res) => {
  // res.send("PUT Method Success");
  db.updateMobile(req.body.name, req.body.price, req.body.ram, req.body.storage, req.body.id)
    .then(() => {
      res.send(req.body);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete("/mobiles", (req, res)=>{ 
  // res.send("DELETE Method Success")
  db.deleteMobiles(req.body.id)
    // .then((mobiles) => {
    //     res.send(mobiles);
    // })
    // .then(() => {
    //   res.send(req.body);
    // })
    .then(() => {
        res.send("Deleted");
      })
    .catch((err) => {
    //   res.send(err); 
    // "res.send()" express deprecated this on dec 17th 2024 at 11:38:05 GMT, use instead "res.sendStatus(status)"
    res.sendStatus(err); 
    });
});
