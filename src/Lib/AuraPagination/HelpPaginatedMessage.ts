import type {
  PaginatedMessageOptions,
  PaginatedMessageSelectMenuOptionsFunction,
} from "@sapphire/discord.js-utilities";
import { minutes } from "../../Utils/timing";
import { AuraPaginatedMessage } from "./AuraPaginatedMessage";

export class HelpPagination extends AuraPaginatedMessage {
  constructor(options: PaginatedMessageOptions) {
    super(options);
    this.setIdle(minutes(10));
    this.setActions([
      {
        customId: "HelpProceed",
        type: 2,
        label: "Proceed",
        style: "PRIMARY",
        run: async ({ interaction }) => {
          if (!(interaction.customId === "HelpProceed")) return;
          await interaction.channel?.send(`Proceeding....`);
        },
      },
    ]);
  }
  setSelectMenuOptions(
    newOptions: PaginatedMessageSelectMenuOptionsFunction
  ): this {
    this.selectMenuOptions = newOptions;
    return this;
  }
}
