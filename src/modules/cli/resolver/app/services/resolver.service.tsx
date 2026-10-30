import { Command } from "../../../types/command";
import { ParsedCommand } from "../../../types/parsedCommand";

export class ResolverService {
  private commands: Map<string, Command>;

  constructor(commands: Map<string, Command>) {
    this.commands = commands;
  }

  resolveCommand(command: ParsedCommand): Command {
    const { name } = command;

    const result = this.commands.get(name);

    if (!result) {
      throw new Error(`Command "${name}" not found`);
    }

    return result;
  }
}
