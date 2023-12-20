import Impreovementes from "../model";

export default interface RepoPrisma{
  create(data: Impreovementes): Promise<void>,
  get(): Promise<Impreovementes[]>
}