// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ActivityHandler } from 'botbuilder';
import { DialogFlowRecognizer } from './recognizers';

export class MyBot extends ActivityHandler {
  constructor() {
    super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
    this.onMessage(async (context, next): Promise <void> => {
      process.env.GOOGLE_APPLICATION_CREDENTIALS = './google.json';
      const dialogFlowRecognizer = new DialogFlowRecognizer();
      const resp = await dialogFlowRecognizer.recognize(context.activity.text);

      await context.sendActivity(resp);
            // By calling next() you ensure that the next BotHandler is run.

      await next();
    });

    this.onMembersAdded(async (context, next): Promise <void> => {
      const membersAdded = context.activity.membersAdded;
      for (const member of membersAdded) {
        if (member.id !== context.activity.recipient.id) {
          await context.sendActivity('Hello and welcome!');
        }
      }
            // By calling next() you ensure that the next BotHandler is run.
      await next();
    });
  }
}
