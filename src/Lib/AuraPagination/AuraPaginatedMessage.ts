import {
  PaginatedMessage,
  PaginatedMessageOptions,
} from "@sapphire/discord.js-utilities";
import { minutes } from "../../Utils/timing";
export class AuraPaginatedMessage extends PaginatedMessage {
  constructor(options: PaginatedMessageOptions, idle = minutes(5)) {
    super(options);
    this.setIdle(idle);
  }
}
