const mongoose = require('mongoose');

const conDB = process.env.MONGODB_CONNECTION;

mongoose.connect(conDB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( ()=>{
    console.log(`MongoDb is connected!`);
}).catch((e)=>{
    console.log(`DB: No Connection`);
})

