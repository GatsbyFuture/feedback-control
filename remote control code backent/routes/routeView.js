// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controller/controlView');

const router = Router();

router.get('/api/clearFile', crudController.clearFile);

router.get('/api/loadFile', crudController.loadFile);

router.get('/api/response', crudController.response);


// router.get('/api/readId/:id', crudController.readActionsId);
// router.post('/api/create' ,crudController.addedActon);
// router.put('/api/update/:id', crudController.updateActionId);
// router.delete('/api/delete/:id', crudController.deleteActionId);

module.exports = router;
