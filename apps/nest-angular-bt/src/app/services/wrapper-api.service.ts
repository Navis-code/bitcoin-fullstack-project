import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statement } from '@bitcoin-fullstack-project/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class WrapperApiService {
  constructor(private http: HttpClient) {}

  getAccountDetailsById(id: string): Observable<Statement[]> {
    const result = this.http.get<Statement[]>(`/api/accounts/${id}`);
    return result;
  }
  getAccounts(): Observable<Account[]> {
    const result = this.http.get<Account[]>('/api/accounts');
    return result;
  }
}
