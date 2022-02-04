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
  public async run() {
    //boilerPlate
    // if(index == 0){
    //   // do this
    // }
    // if(index == 1){
    //   // do this
    // }
    // if(index == 2){
    //   // do this
    // }
    // if(index == 3){
    //   // do this
    // }
    // if(index == 4){
    //   // do this
    // }
  }
}
