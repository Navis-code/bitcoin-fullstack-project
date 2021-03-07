import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
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
    this.wss.emit('test', 'Hello from server!');
  }
}
