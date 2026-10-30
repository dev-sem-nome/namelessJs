export type Command<T = void> = {
  name: string;
  description: string;
  execute: () => T;
};
