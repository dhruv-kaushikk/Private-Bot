import { Listener } from "@sapphire/framework";
import type { Message } from "discord.js";
import type { AuraClient } from "../Lib/AuraClient";
export class Checks extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
      event: "messageCreate",
      name: "BasicChecks",
    });
  }
  async run(msg: Message) {
    if (msg.author.bot) return;
    console.log("LISTENOR WORKING");
    var client = msg.client as AuraClient;
    if (client.getBlackUser.includes(msg.author)) return;
  }
}
