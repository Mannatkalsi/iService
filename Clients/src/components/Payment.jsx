import React from "react";
import "./Content.css"

function Payment(props) {
    return (
        <div className="payment-div">

            <p className="payment-type-p">Select Payment Type:</p>

            <div>
                <label for="pay1">
                    <input id="pay1" type="radio" name="payment_type" value="total" defaultChecked onChange={props.onChange} required />
                    <span>Total</span>
                </label>
            </div>
            <div>
                <label for="pay2">
                    <input id="pay2" type="radio" name="payment_type" value="hourly" onChange={props.onChange} />
                    <span>Hourly rate</span>
                </label>
            </div>
        </div>

    )
}

export default Payment