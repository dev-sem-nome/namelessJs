import { ExecuteCommandAndReturnResultUseCase } from "./executor/app/use-cases/execute-command-and-return.use-case";
import { ParserService } from "./parser/app/services/parser.service";
import { ResolverService } from "./resolver/app/services/resolver.service";
import { Command } from "./types/command";
import { ParsedCommand } from "./types/parsedCommand";


export class Cli {

  private parser : ParserService;
  private executeCommandAndReturnUseCase : ExecuteCommandAndReturnResultUseCase;
  private resolver : ResolverService;

  constructor(
    parser : ParserService,
    executeCommandAndReturnUseCase : ExecuteCommandAndReturnResultUseCase,
    resolver : ResolverService
  ) {
    this.parser = parser;
    this.resolver = resolver;
    this.executeCommandAndReturnUseCase = executeCommandAndReturnUseCase;
  }

  run(command : string[]) {
      const parsedCommand : ParsedCommand= this.parser.parse(command);
      const resolvedCommand : Command = this.resolver.resolveCommand(parsedCommand);
      return this.executeCommandAndReturnUseCase.execute(resolvedCommand);
  }

};
