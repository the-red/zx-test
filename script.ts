#!/usr/bin/env zx

import { $ } from 'zx'
// Or
// import 'zx/globals'

void (async function () {
  await $`ls -la`
})()
