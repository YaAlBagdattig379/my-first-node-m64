const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get( '/',(req,res)=>{
    res.send('look mama i can code now !')
})


app.listen(port,()=>{
    console.log('listening to port',port)
})
