import { SapphireClient } from "@sapphire/framework";
import { CLIENT_OPTIONS } from "./rootCfg";
export class AuraClient extends SapphireClient {
  constructor() {
    super(CLIENT_OPTIONS);
  }
}
