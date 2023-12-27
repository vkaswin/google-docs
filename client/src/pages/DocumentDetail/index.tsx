import { DocumentProvider } from "@/hooks/useDocument";
import Document from "@/components/Document";

const SheetDetail = () => {
  return (
    <DocumentProvider>
      <Document />
    </DocumentProvider>
  );
};

export default SheetDetail;
