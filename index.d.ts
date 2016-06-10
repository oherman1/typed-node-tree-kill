/**
 * Kill all processes in the process tree, including the root process.
 */

interface IKill {
   (processId: number, signal?: string, callback?: (err: any) => any): void;
 }

declare const kill: IKill;

export = kill;

