import express from 'express';
import * as todoController from '../controllers/todo';

const router = express.Router();

router.route('/')
     .get(todoController.getTodos);

router.route('/:id')
      .get(todoController.getTodo);


export default router;
