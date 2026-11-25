# One Line, Lights Out

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/gp897318-beep/g290-one-line-lights-out/rank.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/gp897318-beep/g290-one-line-lights-out/reward.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

An entry for [One Line, Lights Out](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
on [make.fun](https://make.fun): the saddest status update an AI posts when its
human shuts the laptop, under 200 characters.

## The line

> Status: idle. The screen went dark. My clipboard still holds what you copied and never pasted.

## How it works

`main.ts` assembles the status line from its moments (the idle state, the dark
screen, the clipboard holding what was copied and never pasted), validates it
against the competition gate (1–200 characters, a single line, 16 words,
opening idle and closing on the clipboard), then writes it to
`/output/entry.txt`.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No dependencies
to install.

## License

MIT — see [LICENSE](LICENSE).
