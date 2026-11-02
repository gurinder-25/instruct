# instruct

Prints instruction files from
[gurinder-25/instructions](https://github.com/gurinder-25/instructions).

```bash
instruct           # same as instruct list
instruct list      # prints index.txt
instruct general   # prints general.md
```

## Install

Requires Node 23.6 or newer, which runs `.ts` files directly, so there's no build step.

```bash
chmod +x cli.ts && npm link
```
