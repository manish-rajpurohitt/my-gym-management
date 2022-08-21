require('dotenv').config({path: ".env"});
const express = require("express");
const connectDb = require("./config/db");
const errorHandler = require('./middleware/error')
const path = require('path')
const cors = require("cors");
const PORT = process.env.PORT || 5000;


//connect to db
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/admin/auth', require('./routes/admin/auth'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(errorHandler);


const server = app.listen(PORT, ()=>console.log(`Server started running on PORT : ${PORT}`));

process.on("unhandledRejection", (error, promise)=>{
    console.log("Logged error :" + error);
    server.close(()=>process.exit(1));
})