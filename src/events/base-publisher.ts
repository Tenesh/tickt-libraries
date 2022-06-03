import {Message, Stan} from 'node-nats-streaming';
import {TicketSubject, OrderSubject, ExpirationSubject, PaymentSubject} from './subjects';

interface Event {
    subject: TicketSubject | OrderSubject | ExpirationSubject | PaymentSubject;
    data: any;
}

export abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];

    protected client: Stan;

    constructor(client: Stan) {
        this.client = client;
    }

    publish(data: T['data']): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }
                console.log('event published to subject', this.subject);
                resolve();
            });
        });
    }

}