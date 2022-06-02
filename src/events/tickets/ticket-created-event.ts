import {TicketSubject} from '../subjects/ticket-subject';

export  interface TicketCreatedEvent {
    subject: TicketSubject.TicketCreated;
    data:{
        id: string;
        title: string;
        price: number;
        userId: string;
    }
}