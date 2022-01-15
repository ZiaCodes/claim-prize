const mongoose = require('mongoose');

mongoose.connect( "process.env.MONGODB_CONNECTION" ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( ()=>{
    console.log(`MongoDb is connected!`);
}).catch((e)=>{
    console.log(`DB: No Connection`);
})