import { Command } from "@sapphire/framework";
import type { Message } from "discord.js";
export class modMailDisable extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: "modmaildisable",
      aliases: ["mmdisable"],
      description: "Disables the modMail system",
    });
  }
  public async messageRun(message: Message) {
    message.reply("//TODO - modMailDisable");
  }
}
