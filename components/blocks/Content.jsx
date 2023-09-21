export default function Block({ block }) {
  const __html = block?.main?.content
    ?.replaceAll("&lt;", "<")
    ?.replaceAll("&gt;", ">");
  return (
    <div className="flex justify-center my-4 px-4 md:px-8">
      <div
        className="w-full max-w-[1345px] text-justify custom-iframe"
        dangerouslySetInnerHTML={{ __html }}
      />
    </div>
  );
}
