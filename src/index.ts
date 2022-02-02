import { SapphireClient} from '@sapphire/framework';
import { Intents } from 'discord.js';
import {token} from './config.json'

const client = new SapphireClient(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES],loadMessageCommandListeners: true,caseInsensitiveCommands:true, partials: ['MESSAGE', 'CHANNEL', 'REACTION'], ws: {

    }});
void client.login(token);
