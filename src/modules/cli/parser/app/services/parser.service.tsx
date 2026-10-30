import { Command } from "../../../types/command.tsx";
import { ParsedCommand } from "../../../types/parsedCommand.tsx";

export class ParserService {
  constructor(){
  }
  parse(args: string[]): ParsedCommand {
    const [name, ...params] = args;

    return {
      name,
      params
    }
}
}
