import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
