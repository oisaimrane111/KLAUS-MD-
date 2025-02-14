const { cmd } = require('../lib');

cmd({
    pattern: 'menu',
    fromMe: false, // Set to true if you only want the owner to use it
    desc: 'Shows bot commands menu',
    type: 'info'
}, async (message, match) => {
    console.log('Menu command triggered!');

    const gifUrl = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTJ2cXhoYmVqdTFkNGVta2VxYTRzMnNoejkzOHBodWJ6ZGluNmM2dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ypg1zWzMxl17y/giphy.gif'; // Change this to any GIF you like

    const buttonMessage = {
        video: { url: gifUrl },
        caption: `🌟 *KLAUS-MD Bot Menu* 🌟\n\n✅ Available Commands:\n- .menu\n- .ping\n- .sticker\n- .help\n\nPress the button below for more!`,
        footer: '🤖 Klaus-MD Bot',
        buttons: [
            { buttonId: 'commands', buttonText: { displayText: 'View All Commands' }, type: 1 }
        ],
        headerType: 5
    };

    try {
        await message.client.sendMessage(message.jid, buttonMessage);
    } catch (err) {
        console.error('Failed to send menu message:', err);
        await message.reply('⚠️ Error sending menu. Check console for details.');
    }
});
