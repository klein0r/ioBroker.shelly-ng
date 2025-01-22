import type * as utils from '@iobroker/adapter-core';
import type { MQTTClient } from '../client/mqtt';
import { BaseDevice } from './base';

export class NextgenDevice extends BaseDevice {
    private mqttClient: MQTTClient;

    constructor(adapter: utils.AdapterInstance, mqttClient: MQTTClient) {
        super(adapter);

        this.mqttClient = mqttClient;

        // Handle script download
        //this.eventEmitter.on('onScriptDownload', async () => await this.downloadAllScripts());
    }

    public async init(deviceId: string, gen: number): Promise<void> {
        await super.init(deviceId, gen);

        const deviceInfoResult = await this.mqttClient.publishRpcMsg({ method: 'Shelly.GetDeviceInfo' });
        this.setBaseDeviceState('version', deviceInfoResult.fw_id);

        /*
        const getConfigResult = await this.mqttClient.publishRpcMsg({ method: 'Shelly.GetConfig' });
        this.adapter.log.error(JSON.stringify(getConfigResult));
        */

        const getComponentsResult = await this.mqttClient.publishRpcMsg({
            method: 'Shelly.GetComponents',
            params: { include: ['config', 'status'] },
        });
        this.adapter.log.error(JSON.stringify(getComponentsResult));

        /*
        const listMethodsResult = await this.mqttClient.publishRpcMsg({ method: 'Shelly.ListMethods' });
        const shellyMethods = listMethodsResult.methods;

        if (shellyMethods.includes('Shelly.ListProfiles')) {
            // TODO cover vs. relay - Shelly.SetProfile
        }
        */
    }

    public setName(name: string): void {
        this.mqttClient.publishRpcMsg({ method: 'Sys.SetConfig', params: { config: { device: { name } } } });
    }

    public onMessagePublish(topic: string, payload: string): void {
        // yes
    }
}
