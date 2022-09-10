import { FiDownload } from "react-icons/fi";

export default function IllCard({
  kenapa,
  text,
  dari
}) {
  return (
    <div className="rounded-box relative z-10 flex h-36 w-80 cursor-default flex-col gap-1 border bg-base-100 p-2 transition hover:-translate-y-1 hover:shadow hover:shadow-secondary">
      <div className="flex h-full flex-1 flex-col justify-between gap-1">
        <div>
          <p className="text-sm font-medium">{text}</p>
        </div>
        <div className="flex justify-between border-t-2 pt-1">
            <p className="text-sm">- {dari}</p>
            <div className="badge">{kenapa}</div>
        </div>
      </div>
    </div>
  );
}
