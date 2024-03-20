const express = require('express')
const app = express()
app.use(express.json())
const blogrouter = require("./routes/BlogRouter.js")
const database = require("./mock/database.js")
const userRouter = require("./routes/UserRouter.js")
const { getAllBlogsHandler } = require('./handlers/BlogHandler.js')


app.get("/", (req, res) => {
    res.end("hello")
}) 



app.use("", blogrouter);
app.use("", userRouter);





app.listen(8080, () => {
    console.log("Server is running");
})
