import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  socket: Socket;
  currentExchangeRate$ = new Subject<number>();
  readonly uri: string = 'http://localhost:4001/';

  constructor() {
    this.socket = io(this.uri, { transports: ['websocket'] });
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: string) {
    this.socket.emit(eventName, data);
  }

  init() {
    this.listen('connection').subscribe((data) => {
      console.log(data);
    });
    this.emit('get-exchange', 'start');

    this.listen('exchange-rate').subscribe((data: number) =>
      this.currentExchangeRate$.next(data)
    );
  }
}
