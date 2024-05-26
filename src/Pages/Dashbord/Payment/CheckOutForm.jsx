import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {

    const stripe = useStripe()
    const element = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement)

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
        }
        else {
            console.log('payment method error', paymentMethod)
        }

    }

    return (
        <form onSubmit={handleSubmit}>


            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            <button className="btn btn-sm btn-primary my-6" type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

export default CheckOutForm;