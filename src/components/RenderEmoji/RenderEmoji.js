import React from 'react'

const RenderEmoji = (props) => {

    function createEmoji() {
        return { __html: props.htmlEntity }
    }

    return (
        <span dangerouslySetInnerHTML={createEmoji()}></span>
    )
}

export default RenderEmoji
