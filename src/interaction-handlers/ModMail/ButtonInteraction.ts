import {
  InteractionHandler,
  InteractionHandlerTypes,
  PieceContext,
} from "@sapphire/framework";
import type { ButtonInteraction } from "discord.js";
export class ModMailButtonHandler extends InteractionHandler {
  public constructor(ctx: PieceContext) {
    super(ctx, { interactionHandlerType: InteractionHandlerTypes.Button });
  }
  public async parse(interaction: ButtonInteraction) {
    if (interaction.customId !== "HelpProceed") return this.none();
    return this.some();
  }
  public async run(interaction: ButtonInteraction) {
    if (this.RegexMsg(interaction) === "user reports") {
      interaction.channel?.send("User Reports");
    }
    if (this.RegexMsg(interaction) === "dm advertisement") {
      interaction.channel?.send("DM Advertisement");
    }
    if (this.RegexMsg(interaction) === "suggestions") {
      interaction.channel?.send("Suggestions");
    }
    if (this.RegexMsg(interaction) === "miscellaneous") {
      interaction.channel?.send("Miscellaneous");
    }
  }
  public RegexMsg(interaction: ButtonInteraction) {
    var regex = /\`(.*?)\`/;
    try {
      var matched = regex.exec(interaction.message.content)![1].toLowerCase();
      return matched;
    } catch (error) {
      interaction.client.logger.error(error);
    }
  }
}
