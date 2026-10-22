import { Cli } from "../../../modules/cli/cli.tsx";

import { ExecuteCommandAndReturnResultUseCase } from "../../../modules/cli/executor/app/use-cases/execute-command-and-return.use-case.tsx";
import { ParserService } from '../../../modules/cli/parser/app/services/parser.service.tsx';
import { ResolverService } from '../../../modules/cli/resolver/app/services/resolver.service.tsx';
import { Command } from '../../../modules/cli/types/command.tsx';

import { CommandsBootstrap } from "../cli/commands.container.tsx";

export function CliBootstrap(): Cli {

  const parser : ParserService = new ParserService();

  const executeCommandAndReturnUseCase : ExecuteCommandAndReturnResultUseCase = new ExecuteCommandAndReturnResultUseCase();

  const commands : Map<string, Command> = CommandsBootstrap();

  const resolver : ResolverService = new ResolverService(commands);

  const cli : Cli = new Cli(
    parser,
    resolver,
    executeCommandAndReturnUseCase
  );

  return cli;
}
