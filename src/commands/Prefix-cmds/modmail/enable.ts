import { Command } from "@sapphire/framework";
import type { Message } from "discord.js";
export class modMailEnable extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: "modmailenable",
      aliases: ["mmenable"],
      description: "enables the disabled modMail system",
    });
  }
  public async messageRun(message: Message) {
    message.reply("//TODO - modMailEnable");
  }
}
