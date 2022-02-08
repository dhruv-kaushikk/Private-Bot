import { SapphireClient } from "@sapphire/framework";
import { CLIENT_OPTIONS, MONGO_URL } from "./rootCfg";
import { connect } from "mongoose";
export class AuraClient extends SapphireClient {
  constructor() {
    super(CLIENT_OPTIONS);
    //this.InitMongoose();
  }
  async InitMongoose() {
    await connect(MONGO_URL, {
      keepAlive: true,
      retryWrites: true,
      w: "majority",
    });
    this.logger.info("connected to Mongo DB");
  }
}
