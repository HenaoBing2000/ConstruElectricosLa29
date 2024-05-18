const express = require('express');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const bcrypt = require('bcrypt');


app.use(express.json());
app.get('/', (req, res) => {
    res.send('Base de datos exitosa');
});

// inicio sesion(crear)
app.post('/InicioSesion',async(req,res)=>{
    const {nombre,password}=req.body
    const saltRounds=10
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const resultado=await prisma.InicioSesion.create({
        data:{
            nombre,
            password: hashedPassword 
        }
    })
    res.json(resultado)
})
// producto(crear)
app.post('/Producto',async(req,res)=>{
    const {tipoProducto, informacionProducto ,cantidadProducto}=req.body
    const resultado=await prisma.Producto.create({
        data:{
            tipoProducto, informacionProducto ,cantidadProducto
        }
    })
     res.json(resultado)
        
})
//inicio sesion(mostrar)
app.get('/inicioSesiones',async(req,res)=>{
    const inicioSesiones = await prisma.InicioSesion.findMany();
    res.json(inicioSesiones);
})

//producto(mostrar)
app.get('/productos',async(req,res)=>{
    const productos =await prisma.Producto.findMany();
    res.json(productos)
})


app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
