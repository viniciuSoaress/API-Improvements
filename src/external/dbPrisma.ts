import { PrismaClient } from "@prisma/client";
import RepoPrisma from "../core/improvements/service/repoPrisma";
import Impreovementes from "../core/improvements/model";


export default class DBPrisma implements RepoPrisma{

  readonly prisma = new PrismaClient()

  async create(data: Impreovementes): Promise<void> {
    const {email, message, name, subject} = data
    await this.prisma.improvements.create({
      data: {
        email, message, name, subject
      }
    })
  }
  
  
  async get(): Promise<Impreovementes[]> {
    return await this.prisma.improvements.findMany()
  }
}