import { Listener } from "@sapphire/framework";
import { send } from "@sapphire/plugin-editable-commands";
import { RateLimitManager } from "../../Lib/RateLimits/RateLimitManager";
import type { ColorResolvable, Message } from "discord.js";
import { seconds } from "../../Utils/timing";
import prettyMilliseconds from "pretty-ms";
import { inlineCodeBlock } from "@sapphire/utilities";
import { EmbedColors } from "../../config.json";
import type { AuraClient } from "../../Lib/AuraClient";
export class ModMailSystem extends Listener {
  public manager = new RateLimitManager(seconds(50), 2, {
    enabled: true,
    limit: 10,
  });
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
      event: "messageCreate",
      name: "modMailSystem",
    });
  }
  public i = false;
  async run(msg: Message) {
    var client = msg.client as AuraClient;
    if (!(msg.channel.type === "DM")) return;
    var bucket = this.manager.acquire(msg.author.id as string);
    if (bucket.limited) {
      if (bucket.isOverloaded) {
        send(msg, {
          content: `${msg.author}`,
          embeds: [
            {
              color: <ColorResolvable>EmbedColors.ErrorEmbed,
              title: "SPAM DETECTION",
              description: `Stop spamming the Help systems! You've been blacklisted for ${inlineCodeBlock(
                prettyMilliseconds(bucket.remainingTime, { verbose: true })
              )}`,
              timestamp: new Date(),
              footer: {
                text: "Help Systems",
                iconURL: msg.client.user
                  ?.avatarURL({
                    dynamic: true,
                    format: "webp",
                    size: 32,
                  })
                  ?.toString(),
              },
            },
          ],
        });
        this.i = true;
        return (client.setBlackUser = [msg.author]);
      }
      if (this.i === false) {
        send(
          msg,
          `${msg.author} You are being ratelimit'ed! for ${inlineCodeBlock(
            prettyMilliseconds(bucket.remainingTime, { verbose: true })
          )}`
        );
      }
      return;
    }
    try {
      bucket.consume();
      this.i = false;
    } catch {}
    send(msg, "interesting");
  }
}
