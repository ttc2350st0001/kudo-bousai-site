import Link from "next/link";
import { client } from "@/lib/microcms";

export default async function BlogPage() {
    const data = await client.get({
        endpoint: "posts",
    });

    console.log("一覧データ:", data);

    return (
        <div className="max-w-3xl mx-auto py-16 px-4 text-black">
            <h1 className="text-3xl font-bold mb-8">社長の独り言</h1>

            {/* データが0件のとき */}
            {data.contents.length === 0 && (
                <p className="text-gray-500">記事がまだありません</p>
            )}

            {/* 記事一覧 */}
            <div className="space-y-4">
                {data.contents.map((post: any) => (
                    <div
                        key={post.id}
                        className="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white"
                    >
                        <Link href={`/blog/${post.id}`} className="block">
                            <div className="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                            </div>
                        </Link>

                        {/* 投稿日（あれば） */}
                        {post.publishedAt && (
                            <p className="text-sm text-gray-500 mt-1">
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </p>
                        )}
                        {post.eyecatch && (
                            <img
                                src={post.eyecatch.url}
                                className="w-full h-48 object-cover rounded mb-3"
                            />
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}