import { Router } from 'express';
import ProductManager from "../dao/classes/productManagerMongo.js"
const pm = new ProductManager()

const routerV = Router()


routerV.get("/",async(req,res)=>{
    const listadeproductos=await pm.getProducts()
    res.render("home",{listadeproductos})
})

routerV.get("/realtimeproducts",(req,res)=>{
res.render("realtimeproducts")
})

routerV.get("/chat",(req,res)=>{
res.render("chat")
})



export default routerV