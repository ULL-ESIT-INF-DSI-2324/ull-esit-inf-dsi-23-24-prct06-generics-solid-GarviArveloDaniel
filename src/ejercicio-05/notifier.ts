import { NotificationService } from "./notification_service";

/**
 * Represents a Notifier that sends notifications using a NotificationService.
 */
export class Notifier {
  /**
   * Creates a new instance of the Notifier class.
   * @param notificationService - The notification service to use for sending notifications.
   */
  constructor(private notificationService: NotificationService) {}

  /**
   * Sends a notification with the specified message.
   * @param message - The message to include in the notification.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
