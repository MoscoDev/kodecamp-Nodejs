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
app.use(express.json({urlEncoded: false}))

/* get all users*/

app.get("/users", (req,res) =>{
   res.json(users)
} );

/* get a user by id*/

// app.get("/users/:id", (req,res) =>{
//   const user = users.filter(user => {
//     if (user.id === req.params.id) {
//         res.json(user)
//     }
    
// }
//     )
 
//   }
//  );

 app.get("/users/:id", (req, res) => {
  const user = users.find(user =>{
    
     if (user.id === req.params.id) {
       return user
     } else {
      
     }
   })
   if (user) {
     res.status(200).send(user)
   }else{
    res.status(404).send('user not found')

   }
 })

/* create a new user*/
app.post("/users", (req,res) =>{
    users.push({
    "firstName" : req.body.firstName,
    lastName :req.body.lastName,
    "id" : (Number(users[users.length -1].id) + 1).toString()
  });
  res.send(users)
} );

/* Update a user*/

app.put("/users/:id", (req,res) =>{
  const user = users.find(user =>{
    
    if (user.id === req.params.id) {
      return user
    } else {
     
    }
  })
  if (user) {
    user.firstName = req.body.firstName
  user.lastName = req.body.lastName;
  res.status(400).json(users)
  } else {
    res.status(200).json("no user found");
  }
  

} );

/* Delete a user*/

app.delete("/users/:id", (req, res) => {
  const user = users.find(user =>{
    
     if (user.id === req.params.id) {
       return user
     } else {
      
     }
   })
   if (user) {
    users.splice(users.indexOf(user), 1);
     res.status(200).send(users)
   }else{
    res.status(404).send('user not found')

   }
 })
/*
app.get("/user/:id", (req,res) =>{
  const deleteuser =  users.filter(deleteuser => deleteuser.id !== req.params.id);
  res.json(users)
};*/
        
app.listen(3000, ()=>{console.log("running on port 3000")
});
