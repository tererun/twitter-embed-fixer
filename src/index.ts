import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", async (messageCreate) => {
    if (messageCreate.author.bot) return;
    const content = messageCreate.content;
    if (!content) return;
    const replacedText = content.replaceAll("https://x.com", "https://fixupx.com").replaceAll("https://twitter.com", "https://vxtwitter.com");
    await messageCreate.reply({
        content: replacedText, 
        allowedMentions: {
            repliedUser: false,
        }
    });
});



client.login(process.env.DISCORD_BOT_TOKEN);