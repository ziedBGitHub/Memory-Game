import propTypes from 'prop-types'
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, index, feedback, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
        <span className="symbol">
            { feedback === 'hidden' ? HIDDEN_SYMBOL : card }
        </span>
    </div>
)
Card.propTypes = {
    card     : propTypes.string.isRequired,
    index    : propTypes.number.isRequired,
    feedback : propTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        'justMismatched'
    ]).isRequired,
    onClick :propTypes.func.isRequired
}
export default Card