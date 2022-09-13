import 'dotenv/config'
import express from "express";
import companyRouter from './company/company.route.js'
import promotionRouter from './promotion/promotion.route.js'
import cors from 'cors'

const app = express()
const {PORT} = process.env

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({ origin: ['http://localhost:3000'] }));

app.get("/", (req, res) => {
    res.send(`<button>test</button>`)
})
app.use('/company', companyRouter )
app.use('/promotion', promotionRouter)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})