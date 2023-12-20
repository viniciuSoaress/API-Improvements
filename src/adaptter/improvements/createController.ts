import { Router } from "express";
import CreateImpreovements from "../../core/improvements/service/createImprovements";
import { sendEmail } from "../../external/sendEmail";

export default class CreateController {

  constructor(
    readonly server: Router,
    readonly casoDeUso: CreateImpreovements
  ) {
    server.post('/', async (req, res, next) => {
      try {

        const { name, email, message, subject } = req.body as any

        await casoDeUso.handle({name, email, message, subject})
        const assunto = `ola ${name}, obrigado pelo seu email. nossa equipe sera envida para averiguar a situaçao sobre: ${subject}.`
       await sendEmail(email, assunto)

        res.status(201).end()

      } catch (error) {
        next(error)
      }
    })
  }
}