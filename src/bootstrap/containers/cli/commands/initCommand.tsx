import { MakeCommandConfigFactory } from "../../../../../modules/cli/commandInterpreter/parser/app/services/MakeCommandConfigFactory.tsx";

export const InitCommand :  = MakeCommandConfigFactory({
    name: "init",
    description: "init a new project",
    execute: () => console.log("project initialized")
});
