import {OrderSubject} from '../subjects';

export interface OrderCancelledEvent {
    subject: OrderSubject.OrderCancelled;
    data: {
        id: string;
        version: number
        ticket: {
            id: string
        };
    };
}