const express=require("express") ;
const app = express();
const users =[
  {
    "firstName" :"john",
    "lastName" :"Deee",
    "id" : "1001" 
  },
      {
    "firstName" :"johnny",
    "lastName" :"bravo",
    "id" : "1002" 
  },
      {
    "firstName" :"john",
    "lastName" :"Doe",
    "id" : "1003" 
  }
];

/* get all users*/

app.get("/users", (req,res) =>{
   res.json(users)
} );

/* get a user by id*/

app.get("/users/:id", (req,res) =>{
  const user = users.filter(user => {
    if (user.id === req.params.id) {
        res.json(user)
    }
    
}
    )
 
  }
 );


/* create a new user*/
app.post("/users", (req,res) =>{
    users.push({
    "firstName" :"jouuhny",
    "lastName" :"Doe",
    "id" : (Number(users[users.length -1].id) + 1).toString()
  });
  res.send(users)
} );

/* Update a user*/

app.put("/users/:id", (req,res) =>{
  const user = users.filter(user => user.id == req.params.id)
  console.log(req.params.id)
  user.firstName = "james"
  user.id = "1003"
res.json(users);
} );

/* Delete a user*/

app.delete("/users/:id", (req,res) =>{
    const user = users.filter(user => {
      if (user.id !== req.params.id) {
          res.json(user)
      }
      
  }
      )
   
    }
   );
  

/*
app.get("/user/:id", (req,res) =>{
  const deleteuser =  users.filter(deleteuser => deleteuser.id !== req.params.id);
  res.json(users)
};*/
        
app.listen(3000, ()=>{console.log("running on port 3000")
});