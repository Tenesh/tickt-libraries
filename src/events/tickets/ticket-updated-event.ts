import {TicketSubject} from '../subjects/ticket-subject';

export  interface TicketUpdatedEvent {
    subject: TicketSubject.TicketUpdated;
    data:{
        id: string;
        title: string;
        price: number;
        userId: string;
    }
}