import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statement } from '@bitcoin-fullstack-project/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class WrapperApiService {
  constructor(private http: HttpClient) {}

  getAccountDetailsById(id: string) {
    const result = this.http.get<Statement[]>(`/api/accounts/${id}`);
    return result;
  }
}
