import { client } from "@/lib/microcms";

export async function generateStaticParams() {
  const data = await client.get({
    endpoint: "posts",
  });

  return data.contents.map((item: any) => ({
    id: item.id,
  }));
}

export default async function BlogDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const post: any = await client.get({
    endpoint: "posts",
    contentId: id,
  });

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-black">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      {post.content && (
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      )}
    </div>
  );
}