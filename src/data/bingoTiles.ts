import { TileCategory } from "@/types/boardTypes";

export const tiles: Record<TileCategory, string[]> = {
  rookieMistakes: [
    "Force pushed to main (your mentor saw it)",
    "Forgot the WHERE clause in an UPDATE query",
    "Deployed to production instead of staging",
    "Worked in the wrong branch for 3 hours",
    "Leaked API keys in your first commit",
    "Broke the production database during onboarding",
    "Triggered the CI/CD pipeline 10+ times in one day",
    "Committed node_modules to the repo",
    "Debugged for an hour, turns out you misspelled a variable",
    "Removed an 'unnecessary' CSS rule and broke the entire layout",
    "Shut down the wrong Docker container",
    "Ran 'git reset --hard' on the wrong branch",
    "Pushed your .env file to GitHub",
    "Copied code from Stack Overflow that was 5 years old",
    "Asked something that was literally in the README",
    "Logged out all users during a test deploy",
    "Implemented a feature that already existed",
    "Left console.log statements everywhere",
    "Commit message: 'fixed stuff'",
    "Ran migrations in the wrong order",
    "Deleted an important file and couldn't find it in git history",
    "Edited the wrong file for 45 minutes",
  ],

  wins: [
    "PR approved on the first try! 🎉",
    "Got praised by your mentor in code review",
    "Found and fixed an actual bug",
    "Helped a coworker solve a problem",
    "Your suggestion made it into production code",
    "Deploy went through without issues on first try",
    "Understood a complex part of the codebase on your own",
    "Got to present something at sprint review",
    "Someone asked for your opinion in a meeting",
    "Wrote documentation the team actually appreciated",
    "Survived your first on-call shift without panicking",
    "Fixed something senior devs were stuck on",
    "Your unit tests caught an edge case",
    "Got an LGTM without change requests",
    "Got mentioned in a thank you message",
  ],

  relatable: [
    "The coffee machine became your best friend",
    "Wanted to ask something but was afraid to look dumb",
    "Nodded along even though you didn't follow",
    "Mixed up dev and prod (but caught it in time)",
    "Sat waiting for someone to merge your PR",
    "Asked 'does this work for you too?' in Slack",
    "Attended a 1 hour meeting that could've been an email",
    "Forgot to lock your screen when going to lunch",
    "Googled things you felt you 'should' know",
    "Talked for 30 seconds while muted",
    "Went to the wrong meeting room",
    "Got stuck in onboarding docs for hours",
    "Got 15 Slack notifications at once",
    "Started working on a ticket someone else was already doing",
    "Read through 200 old Slack messages for context",
    "Wasn't sure if you should interrupt or wait",
    "Tried to look busy while actually waiting for a response",
    "Had standup anxiety about what to say",
  ],
};

export const bingoTiles: string[] = Object.values(tiles).flat();

export function getCategoryForTile(text: string): TileCategory {
  for (const [category, tileList] of Object.entries(tiles)) {
    if (tileList.includes(text)) {
      return category as TileCategory;
    }
  }
  return "rookieMistakes";
}
