/**
 * Represents a bill.
 */
export class Bill {

  /**
   * Indicates whether the bill is paid or not.
   */
  public isPaid: boolean;

  /**
   * Creates a new instance of the Bill class.
   * @param id - The ID of the bill.
   * @param amount - The amount of the bill.
   * @param dueDate - The due date of the bill.
   */
  constructor(public id: string, public amount: number, public dueDate: string) {
  }

  /**
   * Marks the bill as paid.
   */
  markAsPaid(): void {
    this.isPaid = true;
  }

  /**
   * Gets the details of the bill.
   * @returns A string containing the bill details.
   */
  getDetails(): string {
    const status: string = this.isPaid ? "Paid" : "Unpaid";
    return `ID: ${this.id}\nAmount: $${this.amount}\nDue Date: ${this.dueDate}\nStatus: ${status}`;
  }
}
