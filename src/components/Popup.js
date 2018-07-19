import React from 'react';

const Popup = ({ placement, content }) => {

    return(
        <div className={ 'popup mt-30 ' + placement }>
           <div className='popup__content'>{ content }</div>
        </div>
    )
    
}

export default Popup;