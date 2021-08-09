const express = require("express");
const server = express();
server.use(express.json());
const cors = require("cors")
const helmet = require("helmet")
server.use(cors())
server.use(helmet())

const accountRouter = require("./accounts/accounts-router")


server.use("/api/accounts", accountRouter)
server.get("*", (req,res)=> {
res.send(` <h3> Path not found </h3>`)

})










module.exports = server;
