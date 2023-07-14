import React, { useState } from 'react'

const Tour = (props) => {
const { id, image, info, price, name, removeTour } = props
const [readMore, setReadMore] = useState(true)
	return <div className="single-tour">
    <img src={image} alt={name} />
    <footer>
        <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
        </div>
        <p>
            {readMore ? `${info.substring(0, 200)}...` : info}{' '}
            <button onClick={() => setReadMore((state) => !state)}>
                { readMore ? 'read more' : 'show less'}
            </button>
        </p>
        <button className="delete-btn" onClick={()=> removeTour(id)}>Not Interested</button>
    </footer>
</div>

}
export default Tour;