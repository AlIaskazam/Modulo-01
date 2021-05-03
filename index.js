const express = require('express');

const server = express(); 

server.use(express.json());

const users = ["Leonardo", "Matheus", "Everton"]

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json({ message: `Buscando o índice ${index} usuário ` + users[index] });
})

server.get('/users', (req, res) => {
  return res.json(users);
})

server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);
 
  return res.json(users);
});

server.put(
  "/users/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name; 

    return res.json(users);
  }
);

//Excluir um usuario
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1); 
  return res.json(users);
});

server

server.listen(3000)
