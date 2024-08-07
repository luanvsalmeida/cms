var express = require('express');
var router = express.Router();
const arquivosController = require('../controllers/arquivosController');
const {autentica} = require('../middlewares/middlewares');

//Renderiza a página com os arquivos já criados disponíveis
router.get('/', arquivosController.index);

//Página de criar novo arquivo
router.get('/novo', autentica, arquivosController.createPage);

// Página de edição de arquivos
router.get("/editar/:file", autentica, arquivosController.editPage);

// Rota de carregar página de upload
router.get('/upload', autentica, arquivosController.uploadPage);

//Renderiza conteudo de arquivos
router.get("/:file", arquivosController.getFile);

// Cria arquivo
router.post('/create', arquivosController.createFile);

// Deleta arquivos
router.get('/excluir/:titulo', arquivosController.delete);

// Rota de download
router.get('/download/:file', arquivosController.downloadFile);

// Rota de upload
router.post('/upload', arquivosController.uploadFile);

module.exports = router;
