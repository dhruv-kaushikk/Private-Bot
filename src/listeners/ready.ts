import { Listener } from "@sapphire/framework";
import type { Client } from 'discord.js'
export class ReadyListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
          ...options,
          once: true,
          event: 'ready'
        });
      }
    public async run(client: Client) {
      const { id, tag } = client.user!;
      console.log(`the client has logged in:
      Username: ${tag} 
      ID: ${id}`)
    }
}