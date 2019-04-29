#! /bin/bash

node ./node_modules/@react-native-community/cli/build bundle \
  --entry-file fake-src/app.js \
  --platform ios \
  --dev false \
  --minify false \
  --max-workers 2 \
  --bundle-output build/bundle.js \
  --reset-cache \
  --verbose
