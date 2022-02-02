import { Listener } from "@sapphire/framework";
import type { ColorResolvable, Message } from "discord.js";
import { MessageEmbed } from "discord.js";
import { PaginatedMessage } from "@sapphire/discord.js-utilities";
import { embeds, HelpCategory } from "../Utils/embeds";
import { EmbedColors } from "../config.json";
const myMessage = new PaginatedMessage({
  paginatedMessageData: {
    content:
      "These systems are used for contacting staff members for assistance within the **server**. Remember that all messages are recorded by the system for making further improvement in the system.",
  },
  pageIndexPrefix: "Help Systems",
  template: new MessageEmbed()
    .setColor(<ColorResolvable>EmbedColors.InfoEmbed)
    .setFooter({
      text: " Official Bot from Aura's Paradise",
    })
    .setTimestamp(new Date()),
});
export class ModMailSystem extends Listener {
  public override async run(msg: Message) {
    if (msg.author.bot) return;
    if (!(msg.channel.type === "DM")) return;
    await msg.channel.sendTyping();

    for (let i = 1; i < HelpCategory.length + 1; i++) {
      let str = `page${i}` as keyof typeof embeds;
      await myMessage.addAsyncPageEmbed(async (embed) => {
        embed = <MessageEmbed>embeds[str];
        await myMessage.setSelectMenuOptions(async (pgIndex) => ({
          label: HelpCategory.at(pgIndex - 1)!.toString(),
          description: `Category ${pgIndex}`,
        }));
        return embed;
      });
      myMessage.setActions(
        [
          {
            label: "Proceed",
            type: "BUTTON",
            style: "PRIMARY",
            customId: "ProceedButton",
            run: (context) => {
              console.log(context);
            },
          },
        ],
        false
      );
    }
    myMessage.run(msg);
  }
}
// if a user is doing for example X report it should justify that its a suggestion/report or whatever in the respective moderation channel
