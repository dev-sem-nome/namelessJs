type Command = {
  name: string
  description: string
  execute: () => void
}
export class CommandInterpreterService {

  #commands = new Map<string, Command>();

  constructor(){

  }

  findCommand(command : Command): Command {
    return this.#commands.get(command);
  }

  registry(command : Command): void{
    this.#commands.set(command.name, command);
  }
}
