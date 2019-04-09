#! /bin/bash

grep_node () {
  ps | grep node | wc -l | xargs
}

NODE_START=$(grep_node)
printf ">>>>>>>>>>>> starting node processes: $NODE_START <<<<<<<<<<<<\n"

node ./node_modules/@react-native-community/cli/build bundle \
  --entry-file fake-src/app.js \
  --platform ios \
  --dev false \
  --minify false \
  --max-workers 2 \
  --bundle-output build/bundle.js \
  --reset-cache &

check_node_count () {
  NODE_COUNT=$(grep_node)
  printf "\n>>>>>>>>>>>> node process count: $NODE_COUNT <<<<<<<<<<<<\n"
}

sleep 2
check_node_count

sleep 2
check_node_count

sleep 2
check_node_count

sleep 2
check_node_count

sleep 2
check_node_count

sleep 2
check_node_count

echo "done!"
exit 0
