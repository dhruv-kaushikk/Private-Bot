import type { SapphireClientOptions } from "@sapphire/framework";
import type { ClientOptions } from "discord.js";

export const CLIENT_OPTIONS = <ClientOptions>(<SapphireClientOptions>{
  caseInsensitiveCommands: true,
  caseInsensitivePrefixes: true,
  logger: true,
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
        name: "DMs for Help",
        type: "WATCHING",
      },
    ],
  },
});
export const MONGO_URL =
  "mongodb+srv://Aura:<pass>@cluster0.wyala.mongodb.net/Private-Bot"; //change password, to lazy to add this to .gitignore
