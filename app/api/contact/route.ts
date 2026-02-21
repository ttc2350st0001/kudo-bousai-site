import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json()

    // 必須チェック（UIと合わせる）
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "必須項目が未入力です" },
        { status: 400 }
      )
    }

    // 今はメール送信せずログ出力だけ
    console.log("===== お問い合わせ受信（ダミー） =====")
    console.log({ name, company, email, phone, message })

    // 成功レスポンス
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("APIエラー:", error)

    return NextResponse.json(
      { success: false, error: "サーバーエラー" },
      { status: 500 }
    )
  }
}