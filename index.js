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
  res.send(courses);  

});
const port = process.env.port || 3000;
app.listen(port,()=>console.log(`listening on port ${port}....`));
// functions

//update function
app.put('/api/courses/:id',(req,res)=>{
  const course = courses.find(c=> c.id === parseInt(req.params.id)); 
  if(!course) res.status(404).send('the course with given ID was not found');
 
  const schema = Joi.object({
      name: Joi.string().min(3).required()
  });
  
      const result = schema.validate(req.body);
if(result.error){res.status(400).send(result.error.details[0].message);
  return;
}
course.name = req.body.name;
res.send(course);

}
);