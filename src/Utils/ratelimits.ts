import type { RateLimitManager } from "@sapphire/ratelimits";
import { isNullish, isNullishOrZero } from "@sapphire/utilities";
import type { Interaction, Message, User } from "discord.js";
import prettyMilliseconds from "pretty-ms";

interface MsgRateLimitParameters {
  /** The time in milliseconds that the rate limit is set to */
  time?: number;
  /** The API request that this rate limit is checking against */
  user?: User;
  /** The API response that will be sent to the user */
  msg?: Message;
  /** The {@link RateLimitManager} for this route */
  manager?: RateLimitManager;
}

/**
 * Checks whether a user should be rate limited.
 * @param param0 The parameters for this function
 * @returns `true` if the user should be rate limited, `false` otherwise
 */
export function isMsgRateLimited({
  time,
  user,
  msg,
  manager,
}: MsgRateLimitParameters) {
  if (
    isNullishOrZero(time) ||
    isNullish(user) ||
    isNullish(msg) ||
    isNullish(manager)
  ) {
    return false;
  }
  const id = user.id as string;
  const bucket = manager.acquire(id);
  if (bucket.limited) {
    msg.channel.sendTyping();
    msg.channel.send(
      "You're ratelimited for `" +
        prettyMilliseconds(bucket.remainingTime, { verbose: true }) +
        "` Please use the above embed to proceed with the help Systems."
    );
    return true;
  }
  try {
    bucket.consume();
  } catch {}

  return false;
}
interface interactionRateLimitParams {
  time?: number;
  user?: User;
  interaction?: Interaction;
  manager?: RateLimitManager;
}

export function isInteractionRateLimited({
  time,
  user,
  interaction,
  manager,
}: interactionRateLimitParams) {
  if (
    isNullishOrZero(time) ||
    isNullish(user) ||
    isNullish(interaction) ||
    isNullish(manager)
  ) {
    return false;
  }

  const id = user.id as string;
  const bucket = manager.acquire(id);

  if (bucket.limited) {
    interaction.channel?.sendTyping();
    interaction.channel?.send(
      "You're ratelimited for `" +
        prettyMilliseconds(bucket.remainingTime, { verbose: true }) +
        "` Please **don't Interact** with `Interactions` at this rate."
    );
    return true;
  }

  try {
    bucket.consume();
  } catch {}

  return false;
}
