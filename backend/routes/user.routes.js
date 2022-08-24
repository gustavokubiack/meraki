const express = require('express')
const router = express.Router()

// rotas do usuário

router.post('/registerUser') // cadastro usuário
router.post('/loginUser') // login usuário
router.get('/userProfile') // informações do usuário ==> Perfil
// fazer rota de voluntariar

module.exports = router
