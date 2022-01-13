#!/usr/bin/env zx

import { config } from 'dotenv'
config()

let token = await question(
  'Choose env variable: ',
  {
    // これドキュメント通りに書いてるのに選択肢が出ない。。。
    choices: ['one', 'two', 'three'],
  }
)
console.log({ token })
