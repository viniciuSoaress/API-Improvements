import CasoDeUso from "../../shared/CasoDeUso";
import Impreovementes from "../model";
import RepoPrisma from "./repoPrisma";

export default class CreateImpreovements implements CasoDeUso<Impreovementes, void>{

  constructor(private readonly prisma: RepoPrisma){}


  async handle(data: Impreovementes): Promise<void> {
    
    await this.prisma.create(data)
  }
}