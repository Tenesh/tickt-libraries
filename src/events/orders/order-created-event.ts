import {OrderSubject} from '../subjects/order-subject';
import {OrderStatus} from './order-status';

export  interface OrderCreatedEvent {
    subject: OrderSubject.OrderCreated;
    data:{
        id: string;
        userId: string;
        status: OrderStatus;
        expiresAt: string;
        ticket:{
            id: string,
            price: number
        };
    };
}