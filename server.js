const express=require('express');
const app=express();
app.listen(3000,()=>{console.log('port startet at http://localhost:3000')})
app.get('/',express.static('./public'))
