const { Router } =require('express');
const { check }= require('express-validator')
const { crearUsuario, login, renovarToken } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Crear un nuevo usuario
router.post( '/new', [
  check('name','El nombre es obligatorio').not().isEmpty(),
  check('email','El email es obligatorio').isEmail(),
  check('password','La contraseña es obligatoria').isLength({min:6}),
  validarCampos
] , crearUsuario )

// Login de usuario
router.post( '/', [
  check('email','El email es obligatorio').isEmail(),
  check('password','La contraseña es obligatoria').isLength({min:6}),
  validarCampos
] , login)

// Validar y revalidar token
router.get( '/renew', renovarToken)






module.exports=router;