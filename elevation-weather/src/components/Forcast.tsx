import React from 'react'

const Forcast = ({title}: {title: string}) => {
    return (
        <div className='forcast-container'>
            <h4>{title}</h4>
            <hr />
            <div>
                <p>time</p>
                <span>icon</span>
                <p>55 degrees</p>
            </div>
            <div>
                <p>time</p>
                <span>icon</span>
                <p>55 degrees</p>
            </div>
            <div>
                <p>time</p>
                <span>icon</span>
                <p>55 degrees</p>
            </div>
            <div>
                <p>time</p>
                <span>icon</span>
                <p>55 degrees</p>
            </div>
        </div>
    )
}

export default Forcast
