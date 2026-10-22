import { Command } from "../../../modules/cli/types/command.tsx";

import { InitCommand } from "./commands/initCommand.tsx";

export function CommandsBootstrap(): Map<string, Command> {
  const commands: Command[] = [
    InitCommand,
  ];

  return new Map(
    commands.map((command) => [command.name, command]),
  );
}
