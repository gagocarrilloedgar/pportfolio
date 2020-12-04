import React from 'react'
import "./Buttons.css"

export const ButtonOutlined = ({ title, action, color }) => {
    return (
        <button className={"button outlined " + color} onClick={action}>
            {title}
        </button>
    )
}

export const ButtonContained = ({ title, action, color }) => {
    return (
        <button className={"button contained " + color} onClick={action}>
            {title}
        </button>
    )
}
