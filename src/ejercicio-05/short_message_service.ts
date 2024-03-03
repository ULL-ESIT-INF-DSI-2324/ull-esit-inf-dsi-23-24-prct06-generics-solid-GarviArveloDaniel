import { NotificationService } from "./notification_service";

/**
 * Represents a Short Message Service (SMS) notification service.
 * This class implements the NotificationService interface.
 */
export class ShortMessageService implements NotificationService {

  /**
   * Sends a notification message via SMS.
   * @param message - The message to be sent.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
