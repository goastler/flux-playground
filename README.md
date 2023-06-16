# flux-playground
A small react website to deploy to the flux network to test their services


## build docker img
```bash
npm run clean-npm
npm run clean-build
npm i
npm run build
npm run clean-npm
npm i -w packages/server --omit dev
docker build -t flux-pg .
```