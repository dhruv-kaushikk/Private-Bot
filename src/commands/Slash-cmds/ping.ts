import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from "@sapphire/framework";
import { ColorResolvable, Message, MessageEmbed } from "discord.js";
import { EmbedColors } from "../../config.json";
import type { CommandInteraction } from "discord.js";
export class PingCommand extends Command {
  public override async chatInputRun(interaction: CommandInteraction) {
    const pingEmbed = new MessageEmbed().setColor(
      <ColorResolvable>EmbedColors.InfoEmbed
    );
    let replymsg = <Message>await interaction.reply({
      content: "pinging...",
      ephemeral: true,
      fetchReply: true,
    });
    pingEmbed.setAuthor({
      name: `Pong! Latency is ${
        replymsg.createdTimestamp - interaction.createdTimestamp
      }`,
    });
    interaction.editReply({ content: "Hehe Boi", embeds: [pingEmbed] });
  }
  public override async registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: "ping",
        description: "Pongs. Shows the bot's response time",
        defaultPermission: false,
      },
      {
        guildIds: ["887348082835062786"],
        idHints: ["937532486148313159"],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    );
  }
}
