/**
 * Interface for the file writer
 */
export interface InterfaceFileWriter {
  writeFile(filePath: string, data: string): void;
}