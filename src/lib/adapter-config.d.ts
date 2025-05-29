// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
    namespace ioBroker {
        interface AdapterConfig {
            polltime: number;
            autoupdate: boolean;
            updateUnchangedObjects: boolean;
            logDebugMessages: boolean;
            bind: string;
            port: number;
            mqttusername: string;
            mqttpassword: string;
            qos: number;
        }
    }
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export { };

