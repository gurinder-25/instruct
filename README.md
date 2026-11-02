# instruct

A tiny CLI that fetches and prints my instruction files from
[gurinder-25/instructions](https://github.com/gurinder-25/instructions).

## Install

```bash
npm install -g @gurinder12072003/instruct
```

## Usage

```bash
instruct           # show what it is and how to use it
instruct list      # list available instructions
instruct general   # print general.md
```

## Development

```bash
npm install && npx tsc && npm link   # use the local copy as the global instruct
npm version patch && npm publish     # release a new version
```
