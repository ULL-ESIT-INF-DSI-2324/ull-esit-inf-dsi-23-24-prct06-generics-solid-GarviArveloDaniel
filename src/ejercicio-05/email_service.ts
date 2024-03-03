import { NotificationService } from "./notification_service";

/**
 * Represents an email service that implements the NotificationService interface.
 */
export class EmailService implements NotificationService {

  /**
   * Sends a notification by email.
   * @param message - The message to be sent.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
