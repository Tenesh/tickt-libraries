import {ExpirationSubject} from '../subjects';

export interface ExpirationCompleteEvent {
    subject: ExpirationSubject.ExpirationComplete;
    data: {
        orderId: string;
    };
}