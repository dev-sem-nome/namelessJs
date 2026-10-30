import { Command } from "../../../types/command";

export class ExecuteCommandAndReturnResultUseCase {
  execute<T>(callback: Command<T>): T {
    return callback.execute();
  }
}
