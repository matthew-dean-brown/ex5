import express from 'express'

// import routes that we exported
import productsRouter from './routes/productsRouter.js'



const PORT = process.env.PORT ||3000
const app = express()
app.use(express.json())
// path , imported file
app.use('/products', productsRouter)

app.listen(PORT,()=>{
console.log('http://localhost:'+PORT);
})

const getUsers = async () => {
    let [data] = await pool.query('SELECT * FROM users')
    return data
}




app.get('/users',async(req,res)=>{
    res.json({message:await getUsers()})
})
app.post('/users',(req,res)=>{
    res.json({message:'This is the post user path'})
})
app.patch('/users/:id',(req,res)=>{
    console.log(req.params.id);
    
    res.json({message:'This is the patch user path'})
})
app.delete('/users',(req,res)=>{
    res.json({message:'This is the delete user path'})
})
