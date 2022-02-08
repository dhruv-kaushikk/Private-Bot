import type { PaginatedMessageOptions } from "@sapphire/discord.js-utilities";
import { minutes } from "../../Utils/timing";
import { AuraPaginatedMessage } from "./AuraPaginatedMessage";

export class HelpPagination extends AuraPaginatedMessage {
  constructor(options: PaginatedMessageOptions) {
    super(options);
    this.setIdle(minutes(10));
    this.setActions([
      {
        customId: "ModMailMenu",
        type: 1,
        run: ({ handler, interaction }) => {
          if (interaction.isSelectMenu()) {
            handler.index = parseInt(interaction.values[0], 10);
          }
        },
      },
    ]);
  }
}
