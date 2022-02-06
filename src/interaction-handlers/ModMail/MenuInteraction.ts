import {
  InteractionHandler,
  InteractionHandlerTypes,
  PieceContext,
} from "@sapphire/framework";
import type { SelectMenuInteraction } from "discord.js";
export class ModMailMenuHandler extends InteractionHandler {
  public constructor(ctx: PieceContext) {
    super(ctx, { interactionHandlerType: InteractionHandlerTypes.SelectMenu });
  }
  public async parse(interaction: SelectMenuInteraction) {
    if (interaction.customId !== "HelpProceed") return this.none();
    return this.some({
      index: interaction.values[0],
      name: interaction.component.options[interaction.values[0]]!,
    });
  }
  public async run(
    interaction: SelectMenuInteraction,
    result: InteractionHandler.ParseResult<this>
  ) {
    interaction.channel?.send(
      `You've selected ${result.name}, You can now press the proceed button, to get started!`
    );
  }
}
