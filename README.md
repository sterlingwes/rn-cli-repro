Repo for reproducing max-worker flag not limiting the number of node processes that get spun up with the bundle command. This branch demonstrates the **success scenario**.

For the fail scenario, see the [master branch](/sterlingwes/rn-cli-repro/tree/master).

For the success scenario, see the [fix branch](https://github.com/sterlingwes/rn-cli-repro/tree/fix-max-workers).

Expected output on this branch:

```
$ ./bundle.sh
>>>>>>>>>>>> starting node processes: 1 <<<<<<<<<<<<
maxworkers 2
warning: the transform cache was reset.
Loading dependency graph...
>>>>>>>>>>>> node process count: 4 <<<<<<<<<<<<
Loading dependency graph, done.

>>>>>>>>>>>> node process count: 4 <<<<<<<<<<<<

>>>>>>>>>>>> node process count: 4 <<<<<<<<<<<<

>>>>>>>>>>>> node process count: 4 <<<<<<<<<<<<

>>>>>>>>>>>> node process count: 4 <<<<<<<<<<<<
info Writing bundle output to:, build/bundle.js
info Done writing bundle output
warn Assets destination folder is not set, skipping...

>>>>>>>>>>>> node process count: 1 <<<<<<<<<<<<
done!
```

Setup:

* `git clone https://github.com/wealthsimple/react-native-cli` next to this repo
* `cd react-native-cli && checkout 1.x-max-worker-fix`
* `cd .. && cd rn-cli-repo && yarn install`

Run with `./bundle.sh`
