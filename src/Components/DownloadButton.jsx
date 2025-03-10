import { Download } from "lucide-react";
import { handleDownload } from "../service/Download";
const DownloadButton = () => {
  return (
    <div className="top-4 right-4" id="no-print">
      <button
        onClick={() => {
          console.log("Print button clicked");
          handleDownload();
        }}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Download size={20} />
        Download PDF
      </button>
    </div>
  );
};

export default DownloadButton;
