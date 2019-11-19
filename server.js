const express=require('express');
const app=express();
PORT=process.env.port||3000
app.listen(PORT,()=>{console.log('port startet at http://localhost:3000')})
app.get('/',express.static('./public'))
