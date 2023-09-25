import express from 'express'
import createDish from '../controllers/createDish.js';
import getDishes from '../controllers/getDishes.js';
import deleteDish from '../controllers/deleteDish.js';
import editDish from '../controllers/EditDish.js';

const router = express.Router();

// createDish
router.post('/createDish', createDish);
//get all dishes 
router.get('/', getDishes);
// delete specefic dish
router.post('/:id', deleteDish);
//edit dish
router.put('/:id', editDish);




export default router;