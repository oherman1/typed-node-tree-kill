/**
 * Kill all processes in the process tree, including the root process.
 */
declare module "tree-kill" {

    function kill (processId: number, signal?: string, callback?: (err: any) => any): void;
    namespace kill {

    }
    export = kill;
}
