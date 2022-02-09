import { Command } from "@sapphire/framework";
import type { Message } from "discord.js";
export class modmailreload extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: "modmailreload",
      aliases: ["mmreload"],
      description: "Reloads the modMail system",
    });
  }
  public async messageRun(message: Message) {
    message.reply("//TODO - modMailReload");
  }
}
