import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(4001)
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss: Server;

  private logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.wss.emit('connection', 'connected');
  }

  @SubscribeMessage('get-exchange')
  handleExchangeRate(client: Socket, payload: string) {
    const exchangeRate = 49033.2;
    this.wss.emit('exchange-rate', exchangeRate);
    const interval = setInterval(() => {
      this.wss.emit(
        'exchange-rate',
        (Math.random() * 50000 + exchangeRate).toFixed(2)
      );
    }, 30000);
    return exchangeRate;
  }
}
