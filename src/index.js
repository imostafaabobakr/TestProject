const {app} = require ('./app');
const mongoose = require ('mongoose');
const databaseUrl = 'mongodb+srv://courses:w9XbrtGqPIuZdxnQ@cluster1.ezwco.mongodb.net/coursessystem?retryWrites=true&w=majority'

app.listen(process.env.PORT||3000, async ()=>{
    await mongoose.connect(databaseUrl)
    

    console.log('Server is listening on port 3000....')})
