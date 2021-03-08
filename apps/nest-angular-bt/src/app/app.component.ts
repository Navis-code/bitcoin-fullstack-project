import { WebSocketService } from './web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bitcoin-fullstack-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentExchangeRate$;

  constructor(private webSocketService: WebSocketService) {}
  ngOnInit(): void {
    this.webSocketService.listen('connection').subscribe((data) => {
      console.log(data);
    });
    this.webSocketService.emit('get-exchange', 'start');
    this.webSocketService
      .listen('exchange-rate')
      .subscribe((data) => (this.currentExchangeRate$ = data));
  }
}
