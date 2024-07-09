import React from 'react'

export function ShinyEffect({left , right , top , size = 500}) {
    
    const positionStyyles = {
        top:`{top}px`,
        width:`{size}px`,
        height:`{size}px`,
        zIndex:-1
    }
    if(left !== undefined){
        positionStyyles.left = `{left}px`
    }
    if(right !== undefined){
        positionStyyles.right = `{right}px`
    }

    return (
        <div className='shiny-effect' style={positionStyyles}>
            
        </div>
    )
}
