export default function PageContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b pb-4">
        {title}
      </h2>

      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}