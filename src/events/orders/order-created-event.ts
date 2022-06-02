import {OrderSubject} from '../subjects/order-subject';
import {OrderStatus} from '../types/order-status';

export  interface OrderCreatedEvent {
    subject: OrderSubject.OrderCreated;
    data:{
        id: string;
        version: number;
        userId: string;
        status: OrderStatus;
        expiresAt: string;
        ticket:{
            id: string,
            price: number
        };
    };
}