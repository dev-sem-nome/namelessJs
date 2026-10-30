import { Command } from "../../../../modules/cli/types/command.tsx";

export const InitCommand : Command = {
    name: "init",
    description: "init a new project",
    execute: () => console.log("project initialized")
};
