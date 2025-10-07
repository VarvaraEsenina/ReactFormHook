import FeedbackForm from "./FeedbackForm";
import card from "../Pages/asset/cardd.png"

import React from "react";

export default function CustemFeedbackForm() {
    return (
        <div className='card'>
            <img src={card} className="card-img-top" alr="1" />
            <div className='card-body'>
                <FeedbackForm></FeedbackForm>
            </div>
        </div>
    )
}

