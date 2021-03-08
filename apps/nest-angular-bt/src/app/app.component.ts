import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'bitcoin-fullstack-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentExchangeRate;

  constructor(private webSocketService: WebSocketService) {}
  ngOnInit(): void {
    this.webSocketService.init();
    this.currentExchangeRate = this.webSocketService.currentExchangeRate$;
  }
}
