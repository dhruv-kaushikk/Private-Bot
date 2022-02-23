import type {
  CommandInteraction,
  ContextMenuInteraction,
  GuildMember,
} from "discord.js";
import {
  ApplicationCommandRegistry,
  Command,
  RegisterBehavior,
} from "@sapphire/framework";
export class YeetCommand extends Command {
  public constructor(context: Command.Context) {
    super(context, {
      cooldownDelay: 60 * 1000,
    });
  }
  public chatInputRun(interaction: CommandInteraction) {
    var emojis = {
      boolie: interaction.client.emojis.cache.find(
        (emoji) => emoji.name == "FeelsBulliedMan"
      ),
      yeet: interaction.client.emojis.cache.find(
        (emoji) => emoji.name == "BotYeet"
      ),
      ayy: interaction.client.emojis.cache.find((emoji) => emoji.name == "ayy"),
    };
    var MemberAuthor = <GuildMember>interaction.member;
    var member = <GuildMember>interaction.options.getMember("yeet_the_user");
    if (!member) {
      return interaction.reply({
        content: `you thought I would leave you if you don't provide someone to yeet... ${MemberAuthor.user} get **yeeted** by me ${emojis.boolie}`,
        ephemeral: true,
      });
    }
    var msges = [
      `Epic! ${MemberAuthor.user.username} yeeted ${member.user} outta the server ${emojis.yeet} ||secret thingy, they are timeout'ed for 10 second||`,
      `uh oh, ${MemberAuthor.user.username} yeeted ${member.user}. get stfu'ed ${member.user.username} ${emojis.yeet}`,
      `The ungrateful kid ${member.user} was yeeted out of the paradise by ${MemberAuthor.user.username} ${emojis.boolie}`,
      `haha! Succesfully yeeted the threat ${member.user} into Outer Space ${emojis.yeet}`,
    ];
    if (member.id == interaction.client.id) {
      return interaction.reply({
        content: `Nice try kid, but you can't yeet me`,
        ephemeral: true,
      });
    }
    if (member.id === MemberAuthor.id)
      return interaction.reply({
        content: "dum dum, you can't yeet yourself",
        ephemeral: true,
      });
    if (
      member.roles.highest.comparePositionTo(MemberAuthor.roles.highest.id) > 0
    ) {
      MemberAuthor.timeout(10 * 1000, "Yeeted lmao");
      return interaction.reply({
        content: `hehe! You tried to yeet someone, but they had a higher role than you, Get Yeeted by me ${emojis.boolie}`,
        ephemeral: true,
      });
    }
    if (member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply(
        `${msges[Math.floor(Math.random() * msges.length)]}`
      );
    }
    if (member.moderatable) {
      member
        .timeout(10 * 1000, "Yeeted lmao")
        .then(() => {
          return interaction.reply(
            `${msges[Math.floor(Math.random() * msges.length)]}`
          );
        })
        .catch((err) => {
          interaction.reply("error originated, failed to yeet");
          console.log(err);
        });
    } else {
      return interaction.reply(
        `${msges[Math.floor(Math.random() * msges.length)]}`
      );
    }
  }
  public override contextMenuRun(interaction: ContextMenuInteraction) {
    interaction.reply("Epic");
  }
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand(
      {
        name: "yeet",
        description:
          "The user will not not be able to see any channels for 10 seconds",
        options: [
          {
            name: "yeet_the_user",
            description: "mention the one to be yeeted here",
            type: "USER",
          },
        ],
      },
      {
        guildIds: ["887348082835062786"],
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
        idHints: ["944516704149594112"],
      }
    );
  }
}
