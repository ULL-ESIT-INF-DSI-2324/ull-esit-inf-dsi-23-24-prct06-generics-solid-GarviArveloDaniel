import { Scannable } from "./interface_scannable";

/**
 * Represents a scanner that implements the Scannable interface.
 */
export class Scanner implements Scannable {

  /**
   * Performs the scanning operation.
   */
  scan(): void {
    console.log("Scanning...");
  }
}
