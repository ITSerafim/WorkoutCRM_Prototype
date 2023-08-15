import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AbstractGlobalMessageService } from '../abstract/global-message.abstract';

@Injectable({
  providedIn: 'root',
})
export class GlobalMessageService extends AbstractGlobalMessageService {
  constructor(private readonly service: MessageService) {
    super(service);
  }

  public errorMessage(errorMessage: string): void {
    this.message({
      severity: 'error',
      summary: 'Ошибка',
      detail: errorMessage,
    });
  }

  public successMessage(successMessage: string): void {
    this.message({
      severity: 'success',
      summary: 'Выполнено',
      detail: successMessage,
    });
  }

  public httpErrorMessage(errorResponse: HttpErrorResponse): void {
    const errorMessages: { [key in HttpStatusCode]?: string } = {
      [HttpStatusCode.Forbidden]: 'Доступ запрещен. У вас недостаточно прав',
    };

    this.errorMessage(
      errorMessages[errorResponse.status] || errorResponse.error.message
    );
  }
}
