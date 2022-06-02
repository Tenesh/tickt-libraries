import {OrderSubject} from '../subjects/order-subject';
import {OrderStatus} from '../types/order-status';

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