import { Command } from "../../../types/command.tsx";

export class ResolverService {

  private commands : Map<string, Command>;

  constructor(commands: Map<string, Command>){
    this.commands = commands;
  }

  resolveCommand(command: string): Command {
    const result : Command = this.commands.get(command);
    return result;
  }

};
