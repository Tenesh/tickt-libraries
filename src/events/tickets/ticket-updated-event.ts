import {TicketSubject} from '../subjects/ticket-subject';

export  interface TicketUpdatedEvent {
    subject: TicketSubject.TicketUpdated;
    data:{
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
    }
}