import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {

    const [error, setError] = useState('')

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
            setError(error.message)
        }
        else {
            console.log('payment method error', paymentMethod)
            setError('')
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

            <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckOutForm;