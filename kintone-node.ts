import axios from 'axios'
import { DateTime } from 'luxon'
import { config } from 'dotenv'
config()

const main = async () => {
  if (
    !process.env.KINTONE_API_TOKEN ||
    !process.env.KINTONE_URL ||
    !process.env.KINTONE_APPID
  ) {
    throw new Error('環境変数が未設定です。')
  }

  const now =
    DateTime.local().setZone('Asia/Tokyo')
  const body = {
    app: process.env.KINTONE_APPID,
    record: {
      text: { value: 'hello!' },
      time: { value: now.toISO() },
    },
  }
  console.log(body)
  const headers = {
    'X-Cybozu-API-Token':
      process.env.KINTONE_API_TOKEN,
    'Content-Type': 'application/json',
  }

  const { data, status, statusText } =
    await axios.post(
      `${process.env.KINTONE_URL}/k/v1/record.json`,
      body,
      { headers }
    )
  console.log({ data, status, statusText })
}

main()
