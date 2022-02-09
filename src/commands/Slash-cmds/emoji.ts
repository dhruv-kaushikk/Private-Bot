import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from "@sapphire/framework";
import type { CommandInteraction } from "discord.js";
export class EmojiCommand extends Command {
  public override async chatInputRun(interaction: CommandInteraction) {
    return interaction.reply("Message");
  }
  public override async registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: "emoji",
        description: "use animated emoji without nitro, Ik I m cool af",
        defaultPermission: true,
      },
      {
        guildIds: ["887348082835062786"],
        idHints: ["938687506306719744"],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    );
  }
}
