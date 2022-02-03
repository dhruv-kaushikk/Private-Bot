import { token } from "./config.json";
import { AuraClient } from "./Lib/AuraClient";
const client = new AuraClient();
void client.login(token);
