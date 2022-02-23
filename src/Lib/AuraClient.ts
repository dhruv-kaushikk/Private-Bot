import { SapphireClient } from "@sapphire/framework";
import { CLIENT_OPTIONS } from "./rootCfg";
import type { User } from "discord.js";
export class AuraClient extends SapphireClient {
  public blackListedUsers: Array<User> = [];
  constructor() {
    super(CLIENT_OPTIONS);
    //this.InitMongoose();
    this.blackListedUsers = this.getBlackUser;
  }
  get getBlackUser(): Array<User> {
    return this.blackListedUsers;
  }
  set setBlackUser(userArray: Array<User>) {
    this.blackListedUsers.push(...userArray);
  }
}
