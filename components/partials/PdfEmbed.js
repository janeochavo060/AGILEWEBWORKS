import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function PdfEmbed({ file, width, className }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const changePage = (number) => {
    setPageNumber(pageNumber + number);
  };
  return (
    <div className="w-[700px] text-center">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          className={`${className}`}
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      {numPages && (
        <div className="flex">
          <button
            className={`${pageNumber <= 1 ? "btn-disabled" : ""}`}
            onClick={() => (pageNumber <= 1 ? () => {} : changePage(-1))}
          >
            Back
          </button>
          |{" "}
          <p>
            {pageNumber}/{numPages}
          </p>{" "}
          |
          <button
            className={`${pageNumber < numPages ? "" : "btn-disabled"}`}
            onClick={() => (pageNumber < numPages ? changePage(1) : () => {})}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
