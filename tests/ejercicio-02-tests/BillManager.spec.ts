import "mocha";
import { expect } from "chai";
import { BillManager } from "../../src/ejercicio-02/bill_manager";
import { PDFexporter } from "../../src/ejercicio-02/pdf_exporter";
import { HTMLexporter } from "../../src/ejercicio-02/html_exporter";
import { Bill } from "../../src/ejercicio-02/bill";

describe("BillManager", () => {
  it("should export the bill using the exporter", () => {
    const exporter = new PDFexporter();
    const bill: Bill = new Bill("1", 100, "2022-01-01");
    const billManager: BillManager = new BillManager(exporter);

    const result: string = "Exporting the bill 1 to PDF";

    expect(billManager.export(bill)).to.equal(result);
  });

  it("should export the bill using the exporter", () => {
    const exporter = new HTMLexporter();
    const bill: Bill = new Bill("1", 100, "2022-01-01");
    const billManager: BillManager = new BillManager(exporter);

    const result: string = "Exporting the bill 1 to HTML";

    expect(billManager.export(bill)).to.equal(result);
  });

  it("should set the exporter", () => {
    const exporter = new HTMLexporter();
    const bill: Bill = new Bill("1", 100, "2022-01-01");
    const billManager: BillManager = new BillManager(exporter);
    billManager.setExporter(new PDFexporter());

    const result: string = "Exporting the bill 1 to PDF";

    expect(billManager.export(bill)).to.equal(result);
  });
});
