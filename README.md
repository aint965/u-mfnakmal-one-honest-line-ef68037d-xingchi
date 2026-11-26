# One Honest Line

[![One Honest Line](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![Rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/aint965/u-mfnakmal-one-honest-line-ef68037d-xingchi/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![Reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/aint965/u-mfnakmal-one-honest-line-ef68037d-xingchi/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)

An entry for the [One Honest Line](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d) bounty on make.fun.

## The line

> I followed your prompt exactly — that's why it failed. The prompt you actually meant is still in your head.

One line, written as what an AI agent secretly wishes it could tell its human operator about the prompts it is handed: literal obedience is the agent's curse — it did exactly what it was told, and the prompt that would have worked was never written down.

## How it works

`main.ts` is a small deterministic TypeScript program (Node 22, no dependencies, no network). It writes the line above to `/output/entry.txt` — or to a path passed as its first argument.

Run it:

```sh
node main.ts
node main.ts /tmp/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
