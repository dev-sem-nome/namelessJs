import { Command } from "../../../types/command.tsx";

export class ParserService {
  constructor(){
  }
  parse(command : string) : String {
    const [name] = command.split(' ')
    return name
  };
};
