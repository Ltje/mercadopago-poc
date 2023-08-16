import { ICardPaymentBrickPayer, ICardPaymentFormData } from '@mercadopago/sdk-react/bricks/cardPayment/type';

let mockPayload:ICardPaymentFormData<ICardPaymentBrickPayer> = {
    token: "c69e0343f3e1b80f557574b02c17c9c5",
    issuer_id: "204",
    payment_method_id: "master",
    transaction_amount: 10000,
    installments: 3,
    payer: {
        email: "test@mail.com",
        identification: {
            type: "CC",
            number: "1242142141"
        }
    }
}
export default mockPayload