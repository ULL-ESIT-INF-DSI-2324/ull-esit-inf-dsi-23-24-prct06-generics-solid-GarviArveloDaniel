import { InterfaceFileReader } from "./interface_file_reader";
import { InterfaceFileWriter } from "./interface_file_writer";

/**
 * Represents a file manager that provides methods for reading and writing files.
 */
export class FileManager {

  /**
   * Creates a new instance of the FileManager class.
   * @param filePath - The path of the file to be managed.
   * @param fileReader - An object that implements the InterfaceFileReader interface for reading files.
   * @param fileWriter - An object that implements the InterfaceFileWriter interface for writing files.
   */
  constructor(private filePath: string, private fileReader: InterfaceFileReader,
    private fileWriter: InterfaceFileWriter) {
  }

  /**
   * Sets the path of the file to be managed.
   * @param filePath - The new path of the file.
   */
  public setFilePath(filePath: string): void {
    this.filePath = filePath;
  }

  /**
   * Reads the content of the file.
   * @returns The content of the file as a string.
   */
  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  /**
   * Writes data to the file.
   * @param data - The data to be written to the file.
   */
  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}
