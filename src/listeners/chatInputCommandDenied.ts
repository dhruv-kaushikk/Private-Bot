import type {
  UserError,
  ChatInputCommandDeniedPayload,
} from "@sapphire/framework";
import { Listener } from "@sapphire/framework";
import prettyms from "pretty-ms";
export class CommandDeniedListener extends Listener {
  public run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
    const { remaining } = error.context as { remaining: number };
    if (error.identifier === "preconditionCooldown") {
      return interaction.reply({
        content: `uh oh, you are rate-limited for ${prettyms(remaining, {
          verbose: true,
        })}`,
        ephemeral: true,
      });
    }
  }
}
