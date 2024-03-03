import { BillExporter } from "./bill_exporter";
import { Bill } from "./bill";

/**
 * Represents a Bill Manager that handles the exporting of bills using different exporters.
 */
export class BillManager {
  /**
   * Creates a new instance of BillManager.
   * @param exporter - The exporter to be used for exporting bills.
   */
  constructor(private exporter: BillExporter) {}

  /**
   * Exports a bill using the specified exporter.
   * @param bill - The bill to be exported.
   * @returns A string representation of the exported bill.
   */
  export(bill: Bill): string {
    return this.exporter.exportBill(bill);
  }

  /**
   * Sets the exporter to be used for exporting bills.
   * @param exporter - The exporter to be set.
   */
  setExporter(exporter: BillExporter): void {
    this.exporter = exporter;
  }
}
