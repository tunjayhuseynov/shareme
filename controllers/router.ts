import express from 'express';
import { getContracts, getContract } from './contractController'

const router = express.Router();

router.get('/', getContracts)
router.get('/search', getContract)

export default router;
