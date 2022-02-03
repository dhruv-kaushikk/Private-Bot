import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from "@sapphire/framework";
import type { CommandInteraction } from "discord.js";
export class PingCommand extends Command {
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
        defaultPermission: false,
      },
      {
        guildIds: ["887348082835062786"],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    );
  }
}
