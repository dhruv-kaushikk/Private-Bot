import { RateLimit, RateLimitManager } from "@sapphire/ratelimits";
import type { Message, User } from "discord.js";
import { isNullish } from "@sapphire/utilities";
import { AuraRateLimit } from "./test2";
export class AuraRateLimitManager extends RateLimitManager {
  constructor(
    time: number,
    max: number,
    public exploitManager?: {
      enabled: boolean;
      message: Message;
      user: User;
    }
  ) {
    super(time, max);
    if (
      (isNullish(exploitManager) || isNullish(exploitManager.enabled),
      isNullish(exploitManager?.message),
      isNullish(exploitManager?.user))
    ) {
      console.log("undefiend ExploitManager");
    }
    if (!exploitManager?.enabled) return;
    this.exploitManager = exploitManager;
  }
  acquire(id: string): RateLimit<AuraRateLimit> {
    console.log("THINK");
    return this.get(id) ?? this.create(id);
  }
  create(id: string): RateLimit<AuraRateLimit> {
    const value = new AuraRateLimit(this);
    this.set(id, value);
    console.log(value);
    return value;
  }
}

new AuraRateLimitManager(1, 1).acquire("SDASDASDADAS");
