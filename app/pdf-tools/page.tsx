import { FileText, Combine, Scissors, Image, Languages, ScanText, Signature, RotateCw, Crop, ShieldCheck, Stamp, Bot, Minimize2, Pencil, RefreshCcw, Trash2, Files, ListOrdered, MessageSquareText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const tools = [
  ["Merge", Combine], ["Compress", Minimize2], ["Annotate", Pencil],
  ["Split", Scissors], ["PDF ↔ Word", FileText], ["PDF ↔ Image", Image],
  ["Translate", Languages], ["PDF OCR", ScanText], ["Sign", Signature],
  ["PDF Converter", RefreshCcw], ["Delete Pages", Trash2], ["Rotate", RotateCw],
  ["Crop", Crop], ["Extract Pages", Files], ["Protect", ShieldCheck],
  ["Chat with PDF", MessageSquareText], ["Number Pages", ListOrdered],
  ["Watermark", Stamp], ["AI PDF Assistant", Bot]
] as const;

export default function PdfToolsPage() {
  return (
    <>
      <PageHeader eyebrow="Document Center" title="PDF Tools" text="Convert, organize, sign, protect, and work with your PDF documents in one place." />
      <section className="section-y bg-slate-50">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(([name, Icon]) => (
              <div key={name} className="flex min-h-24 items-center gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-gold-300 hover:shadow-md">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-navy-950 text-white"><Icon className="size-5" /></span>
                <div><h2 className="font-black text-navy-950">{name}</h2><p className="mt-1 text-xs font-semibold text-slate-500">PDF document tool</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
