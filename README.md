# modellift-demo-app

A tiny, illustrative TypeScript service used to demonstrate
[ModelLift](https://model-lift-web.vercel.app): repository scanning, model
lifecycle warnings and a human-reviewed migration pull request.

- This code is an example. It is never executed by ModelLift or by this
  repository, and it makes no network calls on its own.
- It contains no API keys, no environment files and no customer code.
- The provider SDK clients read credentials from the environment only if
  someone deliberately runs the code with their own keys.

Layout:

- `src/support/answer.ts` — drafts an answer to a support question
- `src/support/triage.ts` — classifies an incoming support ticket
- `src/search/rank.ts` — re-ranks search results
