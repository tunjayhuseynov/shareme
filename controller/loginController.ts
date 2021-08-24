import express from 'express';
import {getHtml} from '../index'

const router = express.Router();


router.get('/', async (req: express.Request, res: express.Response) => {

    res.sendFile(getHtml('login/index.html'))
})


export default router;