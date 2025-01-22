import type * as utils from '@iobroker/adapter-core';
import type { Manager } from '../manager';

export class BaseServer {
    protected adapter: utils.AdapterInstance;
    protected manager: Manager;

    constructor(adapter: utils.AdapterInstance, manager: Manager) {
        this.adapter = adapter;
        this.manager = manager;
    }

    destroy(): void {
        this.adapter.log.debug(`[BaseServer] Destroying`);
    }
}
