import {
  InteractionHandler,
  InteractionHandlerTypes,
  PieceContext,
} from "@sapphire/framework";
// import { RateLimitManager } from "@sapphire/ratelimits";
import {
  MessageActionRow,
  MessageButton,
  SelectMenuInteraction,
} from "discord.js";
// import { minutes } from "../../Utils/timing";
export class ModMailMenuHandler extends InteractionHandler {
  // private timeForRateLimit = minutes(5);
  // private readonly rateLimitManager = new RateLimitManager(minutes(5), 5);
  public constructor(ctx: PieceContext) {
    super(ctx, { interactionHandlerType: InteractionHandlerTypes.SelectMenu });
  }
  public async parse(interaction: SelectMenuInteraction) {
    if (interaction.customId !== "ModMailMenu") return this.none();
    return this.some({
      index: interaction.values[0],
      name: interaction.component.options[interaction.values[0]]!.label,
    });
  }
  public async run(
    interaction: SelectMenuInteraction,
    result: InteractionHandler.ParseResult<this>
  ) {
    const proceedButton = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("HelpProceed")
        .setLabel("Proceed")
        .setStyle("PRIMARY")
    );
    interaction.channel?.send({
      content:
        "You have selected `" + result.name + "` Click The button to Proceed",
      components: [proceedButton],
    });
  }
}
