import React from 'react'

const Message = ({msg, bgColor}) => {

    let styles={
        padding:"1rem",
        marginBotton: "1rem",
        backgroundColor: bgColor,
        textAlign: "center",
        color:"fff",
        fontWeight: "bold"

    }
    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}

export default Message
