import { BillExporter } from "./bill_exporter";
import { Bill } from "./bill";

/**
 * PDFexporter class that implements the BillExporter interface.
 * This class is responsible for exporting a bill to PDF format.
 */
export class PDFexporter implements BillExporter {

  /**
   * Exports the given bill to PDF format.
   * @param factura The bill to be exported.
   * @returns A string indicating the export process.
   */
  exportBill(factura: Bill): string {
    return `Exporting the bill ${factura.id} to PDF`;
  }
}
