import { RateLimit } from "@sapphire/ratelimits";
import type { AuraRateLimitManager } from "./test1";

export class AuraRateLimit extends RateLimit<string> {
  public exploitManager!: object;
  constructor(manager: AuraRateLimitManager) {
    super(manager);
  }
}
