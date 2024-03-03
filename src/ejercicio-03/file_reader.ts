import * as fs from "fs";
import { InterfaceFileReader } from "./interface_file_reader";

/**
 * FileReader class that implements the InterfaceFileReader interface.
 * This class provides a method to read the content of a file.
 */
export class FileReader implements InterfaceFileReader {

  /**
   * Reads the content of a file.
   * @param filePath - The path of the file to read.
   * @returns The content of the file as a string.
   */
  public readFile(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al escribir en el archivo:", (error as Error).message);
      return "";
    }
  }
}
