import { client } from "@/lib/microcms";

export default async function BlogDetail({ params }: { params: { id: string } }) {
  const post: any = await client.get({
    endpoint: "test",
    contentId: params.id,
  });

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">{post.test}</h1>

      {post.eyecatch && (
        <img src={post.eyecatch.url} className="mb-6" />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.test }} />
    </div>
  );
}