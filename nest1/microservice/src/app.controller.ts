import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class AppController {
    // Create a logger instance
    private logger = new Logger( 'AppController' );

    // Inject Math Service
    constructor( private mathService: MathService ) {}

    // Define the message pattern for this method
    @MessagePattern( 'add' )
    // Define the logic to be used
    async accumulate( data: number[] ) {
        this.logger.log( 'Adding ' + data.toString() ); // Log something on every call
        return this.mathService.accumulate( data ); // use math service to calc result & return
    }
}
