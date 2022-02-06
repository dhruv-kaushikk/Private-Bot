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
  public async run() {}
}
