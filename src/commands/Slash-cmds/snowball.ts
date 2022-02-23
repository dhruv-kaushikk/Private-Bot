import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from "@sapphire/framework";
import type { CommandInteraction, GuildMember } from "discord.js";
export class SnowBall extends Command {
  public override async chatInputRun(interaction: CommandInteraction) {
    if (interaction.options.getSubcommand(true) == "collect") {
      interaction.reply({
        content: "You collected a snowball!",
        ephemeral: true,
      });
    }
    if (interaction.options.getSubcommand(true) == "throw") {
      var member = <GuildMember>interaction.options.getMember("snow_the_user");
      interaction.reply("You threw a snowball at " + member.user.tag + "!");
    }
  }
  public override async registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      (builder) =>
        builder
          .setName("snowball")
          .setDescription("Snowballing")
          .setDefaultPermission(true)
          .addSubcommand((subcmd) =>
            subcmd.setName("collect").setDescription("Collect the snowball!")
          )
          .addSubcommand((subcmd) =>
            subcmd
              .setName("throw")
              .setDescription("Throw the snowball")
              .addUserOption((option) =>
                option
                  .setName("snow_the_user")
                  .setDescription("The user to throw the snowball at")
                  .setRequired(true)
              )
          )
          .addSubcommand((subcmd) =>
            subcmd.setName("board").setDescription("See the snowboard")
          )
          .addSubcommand((subcmd) =>
            subcmd.setName("stats").setDescription("See your stats")
          ),
      {
        guildIds: ["887348082835062786"],
        idHints: ["944516702442512394"],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
      }
    );
  }
}
