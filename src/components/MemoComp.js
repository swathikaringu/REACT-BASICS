import React from 'react'

function MemoComp({name}) {
    console.log(' Memocomponent')
    return (
        <div>
        {name}    
        </div>
    )
}

export default React.Memo(MemoComp)
