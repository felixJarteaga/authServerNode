const { response } = require('express');


const crearUsuario = (req,res = response)=>{
  
  const { email,name,password } = req.body
  return res.json({
    ok:true,
    msg:'Crear usuario /new'
  })
}

const login = (req,res = response)=>{

const { email,password } = req.body
  return res.json({
    ok:true,
    msg:'Login de usuario /'
  })
} 

const renovarToken = (req,res = response)=>{
  return res.json({
    ok:true,
    msg:'Renew'
  })
} 


module.exports={
  crearUsuario,
  login,
  renovarToken
}