'use client'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* ヒーロー */}
      <section className="text-center py-16 sm:py-24 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-relaxed">
          ここに文字を入れる<br />
          ここに文字を入れる
        </h2>

        <a
          href="#contact"
          className="bg-red-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-red-700 transition"
        >
          問い合わせはこちら
        </a>
      </section>

      {/* 3カラム */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-blue-900">
            TEXT
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">TEXT</h4>
              <p>ここに文字を入れる</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">TEXT</h4>
              <p>ここに文字を入れる</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">TEXT</h4>
              <p>ここに文字を入れる</p>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="services" className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-blue-900">
          事業内容
        </h3>

        <div className="max-w-3xl mx-auto space-y-4">
          <AccordionItem title="火災報知器工事" content="ここに文字..." />
          <AccordionItem title="消火設備工事" content="ここに文字..." />
          <AccordionItem title="消防用設備点検" content="ここに文字..." />
          <AccordionItem title="消防用設備保守" content="ここに文字..." />
          <AccordionItem title="消防用設備・用品・保守点検" content="ここに文字..." />
          <AccordionItem title="防災用品販売" content="ここに文字..." />
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-16 sm:py-20 px-4 sm:px-8 text-center text-blue-900">
        <div className="max-w-3xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            会社概要
          </h3>

          <p>会社名: 工藤防災株式会社</p>
          <p>事業内容: ここに文字を入れる</p>
          <p>所在地: 〒355-0017 埼玉県 東松山市松葉町３丁目３番地３号</p>
          <p>電話番号: 0492-24-5516</p>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="bg-blue-900 text-white py-16 sm:py-20 px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            お問い合わせ
          </h3>

          <p className="mb-6">
            お気軽にお問合せ、ご相談ください！<br />
            経験豊富な消防設備士が、丁寧に対応致します。<br />
            古い消火器のリサイクル処理承ります！
          </p>

          <a
            href="mailto:example@gmail.com"
            className="bg-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            メールで問い合わせ
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="text-center py-6 bg-gray-100 text-sm">
        © {new Date().getFullYear()} 工藤防災株式会社
      </footer>

    </main>
  )
}

function AccordionItem({
  title,
  content,
}: {
  title: string
  content: string
}) {

  //開閉状態 (true=開いている)
  const [isOpen, setIsOpen] =useState(false)

  return (
    <div className="border rounded-md bg-white shadow-sm">

      {/* クイックエリア */}
      <button
        onClick={() => setIsOpen(!isOpen)} //状態を反転
        className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
      >
        {title}

        {/* + と　- の切り替え表示 */}
        <span className="text-xl">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      {/* isOpenがtrueの時だけ詳細表示 */}
      {isOpen && (
        <div className="px-6 pb-4 text-gray-700">
          {content}
        </div>
      )}

    </div>
  )
}