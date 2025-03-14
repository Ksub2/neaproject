const express= require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mangoose=require('mangoose');

 const app=express();
 const port=5173;
app.use(cors());
app.use(bodyParser.json());

mangoose.connect('mongodb://localhost:5173/neaproject',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
const db=mangoose.connection;
db.on ('error',console.error.bind(console,'connection error:'));
db.once('open',()=> {
    console.log('Connected to the database');
});
const authRoutes=require('./routes/auth');
const meetingRoutes=require('./routes/meetings');
app.use('/api/auth',authRoutes);
app.use('/api/meetings',meetingRoutes);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);

});
