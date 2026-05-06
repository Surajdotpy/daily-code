//array of objects
const users = [
  { id: 1, username: "arjun",  password: "abc123" },
  { id: 2, username: "priya",  password: "xyz789" },
  { id: 3, username: "rahul",  password: "pass456" }
];

const newUser = {id: 4, username: "akay", password: "398ei"}
//const username = newUser.username
//const password = newUser.password
//console.log(username) 
//console.log(password)

const {username, password} = newUser;
console.log(username, password) 

//users.push({id: 4, usernamea: "sneha", age: 22});

//const userUpdate = users.filter(u => u.username !== "priya");


//const found = users.find(u => u.username === "priya");
//console.log(found);

//const notFound = users.find(u => u.username === "ghost");
//console.log(notFound);



//.log(users[1].username);
//console.log(users[0]);
//console.log(users[2]. age)
//console.log(users);
//console.log(userUpdate);