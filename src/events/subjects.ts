enum ExpirationSubject {
    ExpirationComplete = 'expiration:complete'
}

enum OrderSubject {
    OrderCreated = 'order:created',
    OrderCancelled = 'order:cancelled'
}

enum TicketSubject {
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated'
}

enum PaymentSubject {
    PaymentCompleted = 'payment:completed',
    PaymentDeclined = 'payment:declined'
}

export { ExpirationSubject, OrderSubject, TicketSubject, PaymentSubject}