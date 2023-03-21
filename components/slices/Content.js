export default function Slice({ slice }) {
  return (
    <div className="flex justify-center my-8 px-4 md:px-8">
      <div
        className="max-w-[1345px] text-justify"
        dangerouslySetInnerHTML={{ __html: slice?.main?.content }}
      />
    </div>
  );
}
