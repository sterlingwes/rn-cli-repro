Repo for reproducing max-worker flag not limiting the number of node processes that get spun up with the bundle command. This branch demonstrates the **fail scenario**.

Expected output on this branch:

```
~/code/ws/rn-cli-repro $ ./bundle.sh
>>>>>>>>>>>> starting node processes: 1 <<<<<<<<<<<<
warning: the transform cache was reset.
Loading dependency graph...
>>>>>>>>>>>> node process count: 8 <<<<<<<<<<<<
Loading dependency graph, done.

>>>>>>>>>>>> node process count: 8 <<<<<<<<<<<<

>>>>>>>>>>>> node process count: 8 <<<<<<<<<<<<

>>>>>>>>>>>> node process count: 8 <<<<<<<<<<<<
info Writing bundle output to:, build/bundle.js
info Done writing bundle output
warn Assets destination folder is not set, skipping...

>>>>>>>>>>>> node process count: 1 <<<<<<<<<<<<

>>>>>>>>>>>> node process count: 1 <<<<<<<<<<<<
done!
```

Setup:

* `git clone https://github.com/react-native-community/cli` next to this repo
* `cd cli && checkout 1.x`
* `cd .. && cd rn-cli-repo && yarn install`

Run with `./bundle.sh`
