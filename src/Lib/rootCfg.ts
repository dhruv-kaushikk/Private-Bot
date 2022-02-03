import type { SapphireClientOptions } from "@sapphire/framework";
import type { ClientOptions } from "discord.js";

export const CLIENT_OPTIONS = <ClientOptions>(<SapphireClientOptions>{
  caseInsensitiveCommands: true,
  caseInsensitivePrefixes: true,
  loadMessageCommandListeners: true,
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "DIRECT_MESSAGES",
  ],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  presence: {
    status: "online",
    activities: [
      {
        name: "To DMs for Help",
        type: "LISTENING",
      },
    ],
  },
});
