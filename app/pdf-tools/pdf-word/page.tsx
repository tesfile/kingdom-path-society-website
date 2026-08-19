"use client";

import { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { FileText } from "lucide-react";
import { ToolShell } from "@/components/pdf/Shared";
import { loadPdfJs } from "@/lib/pdfjsClient";

export default function PdfToWordPage() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function convert() {
    if (!file) return;
    setBusy(true);
    setMessage("");

    try {
      const bytes = await file.arrayBuffer();
      const pdfjs = await loadPdfJs();
      const pdf = await pdfjs.getDocument({ data: bytes.slice(0) }).promise;
      const paragraphs: Paragraph[] = [];

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        setMessage(`Reading page ${pageNumber} of ${pdf.numPages}...`);
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();

        const text = content.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();

        paragraphs.push(
          new Paragraph({
            children: [new TextRun({ text: `Page ${pageNumber}`, bold: true })],
            spacing: { after: 140 }
          })
        );

        paragraphs.push(
          new Paragraph({
            children: [new TextRun(text || "[No selectable text found on this page]")],
            spacing: { after: 240 }
          })
        );
      }

      const wordDocument = new Document({
        sections: [{ properties: {}, children: paragraphs }]
      });

      const blob = await Packer.toBlob(wordDocument);
      const url = URL.createObjectURL(blob);
      const link = window.document.createElement("a");

      link.href = url;
      link.download = file.name.replace(/\.pdf$/i, "") + ".docx";
      window.document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);

      setMessage("Word document created.");
    } catch (error) {
      console.error(error);
      alert("This PDF could not be converted to Word.");
      setMessage("");
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolShell
      title="PDF to Word"
      description="Convert selectable PDF text into a Microsoft Word document. Complex layouts may not look exactly like the original PDF."
    >
      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 font-black text-navy-950">
        <FileText className="size-5" />
        {file ? file.name : "Choose PDF file"}
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
        />
      </label>

      <button
        type="button"
        onClick={convert}
        disabled={!file || busy}
        className="mt-5 w-full rounded-lg bg-navy-950 p-4 font-black text-white disabled:opacity-50"
      >
        {busy ? "Converting..." : "Convert to Word"}
      </button>

      {message ? (
        <p className="mt-4 rounded-lg bg-slate-100 p-4 font-bold text-slate-700">
          {message}
        </p>
      ) : null}
    </ToolShell>
  );
}