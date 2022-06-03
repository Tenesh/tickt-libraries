import {TicketSubject} from '../subjects';

export  interface TicketCreatedEvent {
    subject: TicketSubject.TicketCreated;
    data:{
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
    }
}