import { Router } from "express";
import DBPrisma from "../external/dbPrisma";
import GetController from "../adaptter/improvements/getController";
import GetImpreovements from "../core/improvements/service/getImprovements";
import CreateImpreovements from "../core/improvements/service/createImprovements";
import CreateController from "../adaptter/improvements/createController";

export const routerImpro = Router()
const prisma = new DBPrisma()


const get = new GetImpreovements(prisma)
new GetController(routerImpro, get)

const cretae = new CreateImpreovements(prisma)
new CreateController(routerImpro, cretae)