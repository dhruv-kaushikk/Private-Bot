import {
  InteractionHandler,
  InteractionHandlerTypes,
  PieceContext,
} from "@sapphire/framework";
import type { SelectMenuInteraction } from "discord.js";
export class ModMailButtonHandler extends InteractionHandler {
  public constructor(ctx: PieceContext) {
    super(ctx, { interactionHandlerType: InteractionHandlerTypes.SelectMenu });
  }
  public async parse(interaction: SelectMenuInteraction) {
    if (interaction.customId !== "HelpProceed") return this.none();
    return this.some();
  }
  public async run(interaction: SelectMenuInteraction) {
    interaction.channel?.send("waiting....");
  }
}
