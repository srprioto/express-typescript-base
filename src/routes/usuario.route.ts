import { Router } from 'express';
import UsuarioController from '../controller/usuario.controller';

const router = Router();

router.get('/', UsuarioController.getUsuarios);
router.get('/:id', UsuarioController.getUsuario);
router.post('/', UsuarioController.postUsuario);
router.put('/:id', UsuarioController.putUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);
// router.get('/enviar', UsuarioController.enviarCorreo);
// router.get('/axios/axios', UsuarioController.getWithAx);


export default router;