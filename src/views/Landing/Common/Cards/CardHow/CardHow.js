import React from 'react'
import "./CardHow.css";

export const CardHow = ({ color, icon, title, descpription }) => {

    return (
        <div className="card_how">
            <div className={color}>
            </div>
            <img src={icon} className="icon_how" alt={title} />
            <p className="title_how" >{title}</p>
            <p className="description_how" >{descpription}</p>
        </div>
    )
}
