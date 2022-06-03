import {ExpirationSubject} from '../subjects/expiration-subject';

export interface ExpirationCompleteEvent {
    subject: ExpirationSubject.ExpirationComplete;
    data: {
        orderId: string;
    };
}