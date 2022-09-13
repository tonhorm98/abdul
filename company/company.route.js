import { Router } from "express";
import * as companyController from './company.controller.js'

const router = Router()

router.get('/', companyController.getAll);
router.post('/update', companyController.updateData)
router.post('/create', companyController.createData)
router.post('/delete', companyController.deleteData)


export default router