import { Bill } from "./bill";

/**
 * Represents a bill exporter.
 */
export interface BillExporter {
  /**
   * Exports the bill as a string.
   * 
   * @param factura - The bill to be exported.
   * @returns The exported bill as a string.
   */
  exportBill(factura: Bill): string;
}
