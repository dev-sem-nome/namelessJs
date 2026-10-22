import { ExecuteCommandAndReturnResultUseCase } from "./executor/app/use-cases/execute-command-and-return.use-case";
import { ParserService } from "./parser/app/services/parser.service";
import { ResolverService } from "./resolver/app/services/resolver.service";


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

  run(command : string): CommandExecute {
    try {
      const parsedCommand : string = this.parser.parse(command);
      const resolvedCommand = this.resolver.resolveCommand(parsedCommand);
      return this.executeCommandAndReturnUseCase.execute(resolvedCommand);
    } catch (err) {
      throw err;
    }
  }

};
