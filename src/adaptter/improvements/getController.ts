import { Router } from "express";
import GetImpreovements from "../../core/improvements/service/getImprovements";

export default class GetController {

  constructor(
    readonly server: Router,
    readonly casoDeUSo: GetImpreovements
  ) {
    server.get('/', async (req, res, next) => {
      try {

        const improvements = await casoDeUSo.handle()

        res.send(improvements)
      } catch (error) {
        next(error)
      }
    })
  }
}