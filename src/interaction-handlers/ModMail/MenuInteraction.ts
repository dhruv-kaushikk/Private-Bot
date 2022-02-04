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
    return this.some();
  }
  public async run(
    interaction: SelectMenuInteraction,
    result: InteractionHandler.ParseResult<this>
  ) {}
}
