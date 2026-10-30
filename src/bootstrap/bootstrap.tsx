import { CliBootstrap } from "./containers/cli/cli.container.tsx";

export function Bootstrap(arg: string[]) : void {
  const cli = CliBootstrap();
  cli.run(arg);
}
