const { cmd } = require('../lib');

cmd({
    pattern: 'menu',
    fromMe: false,
    desc: 'Shows bot commands menu',
    type: 'info'
}, async (message, match) => {
    const gifUrl = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTJ2cXhoYmVqdTFkNGVta2VxYTRzMnNoejkzOHBodWJ6ZGluNmM2dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ypg1zWzMxl17y/giphy.gif'; // Change this to any GIF URL you like
    const buttonText = 'View Commands';
    const buttonUrl = 'https://github.com/oisaimrane111/KLAUS-MD'; // You can set this to any bot documentation or command list URL

    const buttons = [
        {buttonId: 'commands', buttonText: {displayText: buttonText}, type: 1}
    ];

    const buttonMessage = {
        video: { url: gifUrl },
        caption: '🤖 *KLAUS-MD Menu* \nHere you can find all commands to use this bot.',
        footer: 'KLAUS-MD Bot',
        buttons: buttons,
        headerType: 5
    };

    await message.client.sendMessage(message.jid, buttonMessage);
});
