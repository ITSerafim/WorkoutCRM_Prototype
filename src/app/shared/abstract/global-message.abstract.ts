import { Message, MessageService } from 'primeng/api';

export abstract class AbstractGlobalMessageService {
  constructor(private readonly messageService: MessageService) {}

  public message(messageConfig: Message): void {
    this.messageService.add(messageConfig);
  }
}
