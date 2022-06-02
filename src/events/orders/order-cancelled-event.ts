import {OrderSubject} from '../subjects/order-subject';
import {OrderStatus} from './order-status';

export interface OrderCancelledEvent {
    subject: OrderSubject.OrderCancelled;
    data: {
        id: string;
        ticket: {
            id: string
        };
    };
}