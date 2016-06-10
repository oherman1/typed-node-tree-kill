import * as kill from 'tree-kill';
import * as childProcess from 'child_process';

describe('kill function', () => {
    let proc: childProcess.ChildProcess;
    let exitCode = null;

    beforeEach(() => {
        proc = childProcess.spawn('/bin/bash',['sleep', '10']);
        proc.on('close', (code: number) => {
                exitCode = code;
            });

    });

    it('it should kill a process', (done) => {
        setTimeout(() => {
            kill(proc.pid, 'SIGTERM', () => {
                expect(exitCode).not.toBeNull();
                done();
            });
        }, 1000);

    });
});
