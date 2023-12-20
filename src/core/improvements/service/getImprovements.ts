import CasoDeUso from "../../shared/CasoDeUso";
import Impreovementes from "../model";
import RepoPrisma from "./repoPrisma";

export default class GetImpreovements implements CasoDeUso<void, Impreovementes[]>{
  
  constructor(private readonly prisma: RepoPrisma){}
  
  async handle(): Promise<Impreovementes[]> {
    return await this.prisma.get() 
  }
}