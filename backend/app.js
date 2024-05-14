const express = require('express')
const mongo = require('mongoose');
const {Book} = require('./module/booksModels')
const booksRoute = require('./routes/bookRoutes')
const cors = require('cors')


const port = 8080;

const app = express();
app.use(cors());
app.use('/book',booksRoute)
app.use(express.urlencoded({extended:false}))





// app.use(cors({
//     origin: 'http://localhost:5173'
//   }));


// app.use(
//     cors({
//         origin:'http://localhost:8080',
//         method:['GET','POST','PUT','DELETE'],
//         allowedheaders:['Content-Type'],

//     })
// )


mongo.connect('mongodb://localhost:27017/LibraryApplication')
.then(()=>{
    console.log('Databse connected')
})
.catch(()=>{
    console.log('Error Connecting DataBase')
})    


// checkif server is ready
app.get('/',(req,res)=>{
    console.log('Requested')
})



app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
