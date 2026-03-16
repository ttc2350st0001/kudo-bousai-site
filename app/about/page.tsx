import PageContainer from "@/components/PageContainer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <PageContainer title="会社概要">
      <p>
        会社名: 工藤防災株式会社<br />
        代表者: 代表取締役 工藤 康生<br />
        所在地: 〒355-0017 埼玉県東松山市松葉町3-3-3<br />
        TEL : 0493-24-5561<br />
        FAX : 0493-22-7489<br />
        設立 : 20XX年X月X日<br />
        事業内容 : 消防用設備工事・点検・保守・用品販売<br />
        登録番号 : T1030001072282<br />
      </p>

      {/* Googleマップ（ストリートビュー） */}
      <div className="max-w-4xl mx-auto w-full h-[400px] mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1773463568834!6m8!1m7!1sRQ_ROt0XqYUgv-WStzc9wg!2m2!1d36.03968532513873!2d139.3956383626675!3f309.1798509046035!4f-5.727599528937446!5f0.7820865974627469"
          className="w-full h-full border-0 rounded-xl shadow"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </PageContainer>
  );
  
}
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

