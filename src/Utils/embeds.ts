export const HelpCategory = [
  "Welcome Page",
  "User Reports",
  "Dm advertisement",
  "Suggestions",
  "Miscellaneous",
];
export const embeds = {
  page1: {
    title: "Help Systems",
    description:
      "To utilise the help system, you can select an option from the selection menu and then click on the button, which will get you more info about the specific category, if at any time you want to cancel the interaction you can type `cancel` in the bot's dm. make sure to use the menus accordingly. Trying to exploit or find loopholes within the help systems might get you punished within the server.",
    fields: [
      {
        name: "User reports",
        value:
          "Report a user who might be trying to harass or simply annoying you in the server. This is to ensure that the server stays non-toxic and healthy.",
        inline: true,
      },
      {
        name: "Dm advertisement",
        value:
          "you can report a user who is advertising or giving scam links using Discord's Direct Message Feature, this is to prevent scams and unauthorised advertising.",
        inline: true,
      },
      {
        name: "Suggestions",
        value:
          "You can suggest some awesome stuff using the suggestion's menu, make sure to provide as much description as you can so its clear, what exactly you would like in the server.",
        inline: true,
      },
      {
        name: "Miscellaneous",
        value:
          "You might have problems that don't match any criteria above, you can directly contact a mod from here.",
        inline: true,
      },
    ],
    // image: {
    //     url: 'https://i.imgur.com/AfFp7pu.png',
    // },
    //timestamp: new Date(),
    // footer: {
    //     text: 'Some footer text here',
    //     icon_url: 'https://i.imgur.com/AfFp7pu.png',
    // },
  },
  page2: {
    title: "User Reports",
    description:
      "Having troubles with a specific user? Report them here, they will take care of the situation and make sure that the server stays healthy.",
    fields: [
      {
        name: "When to report?",
        value:
          "A user might be trying to potentially target or harasss you within the server. This is something that the moderators might miss! Make sure to provide proof including screenshots of messages and a brief Summary. this will help the staff team to take care of the situation and make sure that the server stays a fun environment.",
        inline: true,
      },
      {
        name: "How to report?",
        value:
          "You can start to report by first of all clicking on the proceed button, then you can answer the question's the bot will ask in direct messages. Answer the questions asked briefly. Only use english throughout the whole process. A gentle reminder, we aren't responsible if you put your personal information in the system.",
        inline: true,
      },
    ],
  },
  page3: {
    title: "Dm advertisement",
    description: `Having trouble's with people advertising in direct messages? Report them here, The user will be dealt with.`,
    fields: [
      {
        name: `When to report?`,
        value: `A user might be trying to scam or advertise using the direct messages Feature. Any links that self-promote will be counted, The DM advertisement won't be counted, Make sure to provide clear proof and the user will be dealt with. Trying to exploit the system by creating fake direct messages will get you punished within the server.`,
        inline: true,
      },
      {
        name: `How to report?`,
        value: `You can start to report by first of all clicking the proceed button, then you can answer the question's the bot will ask in direct messages, Share the images of full dms with the user. Remember if you the user were asked before you were given a link, then you simply cannot report them because this might lead to exploitation of the system.`,
        inline: true,
      },
    ],
  },
  page4: {
    title: "Suggestions",
    description: `Any suggestions you have? Make sure to provide as much information as possible, so that the suggestion is clear and easy to understand. You can also provide screenshots for context.`,
    fields: [
      {
        name: `When to Suggest?`,
        value: `You can suggest anytime, whenever your brain has a new video, you can use the system for a suggestion's request.`,
        inline: true,
      },
      {
        name: `How to Suggest?`,
        value: `you can start to suggest by first of all clicking the proceed button, then you can put your suggestion in the dm.`,
        inline: true,
      },
    ],
  },
  page5: {
    title: "Miscellaneous",
    description: `Any other questions? You can contact a moderator from here.`,
    fields: [
      {
        name: `When to ask?`,
        value: `You can use this category when any of the upper categories don't match the criteria, but make sure to only ask for help if you are sure that the something is related to the server.`,
        inline: true,
      },
      {
        name: `How to ask?`,
        value: `You can start to ask by first of all clicking the proceed button, then you can put your question in the dm, you can be privding images for context, as we aren't sure what would you want to report.`,
        inline: true,
      },
    ],
  },
};
