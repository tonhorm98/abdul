import { Router } from "express";
import * as promotionController from './promotion.controller.js'

const router = Router()

router.get('/', promotionController.getAll);
router.post('/update', promotionController.updateData)
router.post('/create', promotionController.createData)
router.post('/delete', promotionController.deleteData)


export default router