'use client'
import { useState } from 'react'
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

{/* 営業時間バー */}
<div className="bg-blue-900 text-white text-center py-2 text-sm font-medium tracking-wide">
  <span className="mx-2">【営業時間】9:00 - 17:00</span>
  <span className="mx-2 hidden sm:inline">|</span>
  <span className="mx-2">【定休日】毎週〇曜 / 第X・X〇曜 / 年末年始</span>
  <span className="mx-2 hidden sm:inline">|</span>
  <span className="mx-2">☎ 0493-24-5561</span>
</div>

{/* ヒーロー */}
<section className="relative h-[420px] sm:h-[520px] overflow-hidden">

<div className="relative w-full h-[500px] overflow-hidden">
<img src="/slide1.jpg" className="fade-image" />
<img src="/slide2.jpg" className="fade-image" />
<img src="/slide3.jpg" className="fade-image" />
<img src="/slide4.jpg" className="fade-image" />
<img src="/slide5.jpg" className="fade-image" />
</div>

<div className="absolute inset-0 bg-black/40" />

<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
<h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-relaxed drop-shadow-lg">
安全と安心を守る消防設備<br />
工藤防災株式会社
</h2>

<a
href="#contact"
className="bg-red-600 px-8 py-3 rounded-md text-white font-semibold hover:bg-red-700 transition shadow-lg"
>
問い合わせはこちら
</a>
</div>

</section>


{/* 私たちの強み */}
<section className="py-16 sm:py-20 px-4 sm:px-8 text-center bg-gray-50">

<div className="max-w-6xl mx-auto">

<h3 className="text-2xl sm:text-3xl font-bold mb-12 text-blue-900">
私たちの強み
</h3>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
<h4 className="text-xl font-semibold mb-2">豊富な経験</h4>
<p className="text-gray-600">消防設備の設置・点検を長年の経験でサポートします。</p>
</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
<h4 className="text-xl font-semibold mb-2">迅速対応</h4>
<p className="text-gray-600">お困りの際は迅速に対応し、安全を守ります。</p>
</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
<h4 className="text-xl font-semibold mb-2">安心施工</h4>
<p className="text-gray-600">確実な施工と丁寧な作業を心がけています。</p>
</div>

</div>
</div>

</section>


{/* 事業内容 */}
<section id="services" className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-8">

<h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-blue-900">
事業内容
</h3>

<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

<ServiceCard
icon="🔥"
title="火災報知器工事"
text="建物に合わせた火災報知設備の設置工事を行います。"
/>

<ServiceCard
icon="🧯"
title="消火設備工事"
text="消火器・消火栓など各種消火設備の設置を行います。"
/>

<ServiceCard
icon="🔍"
title="消防用設備点検"
text="消防法に基づく定期点検を実施します。"
/>

<ServiceCard
icon="🛠"
title="消防用設備保守"
text="設備のメンテナンスや修理を行います。"
/>

<ServiceCard
icon="⚙️"
title="消防用設備・用品・保守点検"
text="設備のメンテナンスや修理を行います。"
/>

<ServiceCard
icon="📦"
title="防災用品販売"
text="消火器や防災用品の販売を行っています。"
/>

</div>

</section>


{/* 会社概要 */}
<section id="company" className="py-16 sm:py-20 px-4 sm:px-8 text-center text-blue-900">

<div className="max-w-3xl mx-auto space-y-3">

<h3 className="text-2xl sm:text-3xl font-bold mb-8">
会社概要
</h3>

<p>会社名: 工藤防災株式会社</p>
<p>事業内容: 消防設備工事・点検・保守・防災用品販売</p>
<p>所在地: 〒355-0017 埼玉県東松山市松葉町3丁目3番地3号</p>
<p>電話番号: 0493-24-5561</p>

</div>

</section>


{/* お問い合わせ */}
<section id="contact" className="bg-blue-900 text-white py-16 sm:py-20 px-4 sm:px-8 text-center">

<div className="max-w-3xl mx-auto">

<h3 className="text-2xl sm:text-3xl font-bold mb-6">
お問い合わせ
</h3>

<p className="mb-6 leading-relaxed">
お気軽にお問合せ、ご相談ください！<br />
経験豊富な消防設備士が丁寧に対応いたします。<br />
古い消火器のリサイクル処理も承っております。
</p>

<p className="mb-6">
【営業時間】9:00〜17:00<br />
【定休日】毎週〇 / 第X・X〇曜 / 年末年始
</p>

<a
href="mailto:example@gmail.com"
className="bg-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition shadow"
>
メールで問い合わせ
</a>

</div>

</section>


<footer className="bg-gray-100 py-8 text-sm">

<div className="max-w-6xl mx-auto px-4 text-center space-y-3">

<div className="space-x-6">

<Link href="/areas" className="hover:text-blue-700">
対応エリア
</Link>

<Link href="/fee" className="hover:text-blue-700">
料金
</Link>

<Link href="/policy" className="hover:text-blue-700">
プライバシーポリシー
</Link>

</div>

<p className="text-gray-500">
© {new Date().getFullYear()} 工藤防災株式会社
</p>

</div>

</footer>

</main>
)
}


function ServiceCard({
icon,
title,
text
}: {
icon: string
title: string
text: string
}) {

return (
<div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">

<div className="text-4xl mb-3">
{icon}
</div>

<h4 className="font-bold text-lg mb-2 text-blue-900">
{title}
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
{text}
</p>

</div>
)

}