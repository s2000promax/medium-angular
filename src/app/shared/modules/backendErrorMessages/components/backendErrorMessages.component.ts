import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors')
  backendErrorsProps: BackendErrorsInterface | null;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = this.backendErrorsProps
      ? Object.keys(this.backendErrorsProps).map((name: string) => {
          const messages = this.backendErrorsProps
            ? this.backendErrorsProps[name].join(', ')
            : '';

          return `${name} ${messages}`;
        })
      : [];
  }
}
