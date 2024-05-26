import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

//TODO: add publishable key
const stripPromise = loadStripe(import.meta.env.VITE_Payment_Key)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay First"></SectionTitle>

            <div>
                <Elements stripe={stripPromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;