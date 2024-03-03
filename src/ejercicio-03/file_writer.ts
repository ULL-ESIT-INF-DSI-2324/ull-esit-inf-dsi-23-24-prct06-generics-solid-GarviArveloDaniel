import * as fs from "fs";
import { InterfaceFileWriter } from "./interface_file_writer";

/**
 * Represents a FileWriter that implements the InterfaceFileWriter interface.
 */
export class FileWriter implements InterfaceFileWriter {

  /**
   * Writes data to a file.
   * @param filePath - The path of the file to write to.
   * @param data - The data to write to the file.
   */
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", (error as Error).message);
    }
  }
}
