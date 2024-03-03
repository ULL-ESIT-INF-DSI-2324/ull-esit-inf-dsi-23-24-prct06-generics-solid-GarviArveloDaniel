import { BillExporter } from "./bill_exporter";
import { Bill } from "./bill";

/**
 * Represents an HTML exporter for bills.
 */
export class HTMLexporter implements BillExporter {

  /**
   * Exports the given bill to HTML format.
   * 
   * @param factura - The bill to be exported.
   * @returns A string representing the exported bill in HTML format.
   */
  exportBill(factura: Bill): string {
    return `Exporting the bill ${factura.id} to HTML`;
  }
}
