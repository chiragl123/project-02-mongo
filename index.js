const express = require("express");
const {connectMongoDB} = require("./connection");
const userRouter = require("./routes/user");
const {logRequestResponse} = require("./middlewares");

const PORT = 8000;
const app = express();
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logRequestResponse("log.txt"));

connectMongoDB("mongodb://127.0.0.1:27017/crud").then(()=> console.log('Mongo DB Connected Successfully...!'))

//Routes
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
