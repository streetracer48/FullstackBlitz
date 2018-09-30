import _ from 'lodash';
import React from 'react'
import {connect} from 'react-redux'

import formFields from './formfields'

const SurveyReview = ({ onCancel, formReviewValues}) =>
{
    const reviewFields = _.map(formFields, fields => {

         return (
            <div>
             <label>{fields.label}</label>
               <div>
                {formReviewValues[fields.name]}
                </div>
            </div>
         )

    })



    // console.log(formReviewValue)
    return (
        <div>
        <h1>Survey Form Review</h1>
        {reviewFields}
        <button className="yellow darken-3 btn-flat"
        onClick={onCancel}
        >Back </button>
        </div>
    )

}

function mapStateToProps(state) {
    // console.log(state)
    return {

        formReviewValues:state.form.surveyForm.values

    }

}



export default connect(mapStateToProps)(SurveyReview)
