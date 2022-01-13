#!/usr/bin/env zx

import { DateTime } from 'luxon'
import { config } from 'dotenv'
config()

if (
  !process.env.KINTONE_API_TOKEN ||
  !process.env.KINTONE_URL ||
  !process.env.KINTONE_APPID
) {
  throw new Error('環境変数が未設定です。')
}

const now = DateTime.local().setZone('Asia/Tokyo')
const body = {
  app: process.env.KINTONE_APPID,
  record: {
    text: { value: 'hello!' },
    time: { value: now.toISO() },
  },
}
const headers = {
  'X-Cybozu-API-Token':
    process.env.KINTONE_API_TOKEN,
  'Content-Type': 'application/json',
}
console.log(headers, body)

const response = await fetch(
  `${process.env.KINTONE_URL}/k/v1/record.json`,
  {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  }
)

const data = await response.json()
console.log(data)
