const mongose= require('mongoose');
const dotenv=require('dotenv');
const app=require('./App');

dotenv.config({path:'./config.env'});

const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABSE_PASSWORD);

mongose.connect(DB,{
    userNewUrlParser:false,
    useCreateIndex:true,
    useFinAndModify:false
}).then(con=>{
    console.log(con.connections);
    console.log('DB connection successful!');
})

const port=process.env.PORT || 5000;

// app.listen(port, ()=>{
//     console.log(`App running on port ${port}...`);
// });