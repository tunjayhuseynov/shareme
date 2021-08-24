import express from 'express'
import loginRouter from './controller/loginController';
import path from 'path'

const app = express()
const port = 3000
export const getHtml = (htmlPath : string) =>path.join(__dirname, `./pages/${htmlPath}`)

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/login', loginRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})   