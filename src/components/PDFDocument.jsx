"use client"

import React from "react"

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";

// Import the styles provided by the react-pdf-viewer packages
// import "@react-pdf-viewer/core/lib/styles/index.css"
// import "@react-pdf-viewer/default-layout/lib/styles/index.css"

// import { Viewer, Worker } from "@react-pdf-viewer/core"
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"

// import pdfFile from "../app/EPC/BOSMRulebooks.pdf";
import pdfFile from "../../public/static/pdf/BOSMRulebooks.pdf";
import * as styles from "../app/EPC/epc.module.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

// Create Document Component
export default function PDFDocument({setIsLoading}) {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const [numPages, setNumPages] = React.useState(1)
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    if (setIsLoading) {
      setIsLoading(false)
    }
  }

  return (
    <Document
      file={pdfFile}
      onLoadSuccess={onDocumentLoadSuccess}
      options={options}
      className={styles.pdf}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          className={styles.pdfpage}
          renderTextLayer={false}
          renderInteractiveForms={false}
        />
      ))}
    </Document>
  )
}
