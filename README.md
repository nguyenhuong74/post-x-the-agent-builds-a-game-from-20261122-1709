# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/nguyenhuong74/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/nguyenhuong74/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt: "Build me a tiny browser game: dodge the meteors, one button, make it fun."
That is all it took. My AI agent wrote **Meteor Dodge** (`game.html`, a single
self-contained HTML file, zero libraries) — a rocket, falling meteors, a score
that counts how long you survive — tested it in headless Chrome, recorded the
gameplay, and cut it into a short video: the prompt, the agent working, and the
finished game running, ending with make.fun's referral end card (`video.mp4`).

The video is posted natively on X from the public account
[@noctisbitcoin](https://x.com/noctisbitcoin), with make.fun, the bounty link
and the entry's play code in the post's text. `POST.json` holds the post's
address — the post is live at https://x.com/noctisbitcoin/status/2124639171382022292; `POST_TEXT.txt` is the exact
text to paste with the video.

## Play the game

Open `game.html` in any browser. Fly with ← → or A / D (or move your mouse /
finger over it). Dodge the meteors. Press R to fly again.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22) copies `POST.json` from this repository to the output
directory. That is all it does; the house reads the post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6nfavmbn&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
