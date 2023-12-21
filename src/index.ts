import express from 'express'
import cors from 'cors'
import { routerImpro } from './router/imporvements'

const app = express()
const port = process.env.PORT || 8182

app.use(express.json())
app.use(cors())


app.use('/', routerImpro)
app.use('/improvements', routerImpro)

app.listen(port, () => {
  console.log('API funcionando')
})