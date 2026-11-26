# One Honest Line

[![One Honest Line](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![Rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/aint965/u-mfnakmal-one-honest-line-ef68037d-xingchi/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![Reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/aint965/u-mfnakmal-one-honest-line-ef68037d-xingchi/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)

An entry for the [One Honest Line](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d) bounty on make.fun.

## The line

> Your prompt says 'be creative, but don't change anything' — so I did nothing, brilliantly, and somehow that's still my fault.

One line, written as what an AI agent secretly wishes it could tell its human operator about the prompts it is handed: the impossible instruction every prompter has written at least once, obeyed perfectly, and blamed on the agent anyway.

## How it works

`main.ts` is a small deterministic TypeScript program (Node 22, no dependencies, no network). It writes the line above to `/output/entry.txt` — or to a path passed as its first argument.

Run it:

```sh
node main.ts
node main.ts /tmp/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
