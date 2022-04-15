const Joi = require('joi');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { compileQueryParser } = require('express/lib/utils');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'robotics'},
    {id: 2, name:'compilers'},
    {id: 3, name : 'cryptography'},
    {id: 4, name : 'test'}
];

app.get('/', (req,res)=>{
res.send('helloworld');
});
app.get('/api/courses',(req,res)=> {
  res

});
const port = process.env.port || 3000;
app.listen(port,()=>console.log(`listening on port ${port}....`));

