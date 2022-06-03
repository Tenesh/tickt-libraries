import {PaymentSubject} from '../subjects';

export interface PaymentCreatedEvent {
    subject: PaymentSubject.PaymentCreated;
    data:{
        id: string;
        orderId: string;
        stripeId: string;
        userId: string;
        price: number;
    }
}