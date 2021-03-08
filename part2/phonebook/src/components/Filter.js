import React from 'react'

const Filter = (props) =>{
return(
    <div>
        filter shown with
        <input 
        value={props.filteredValue}
        onChange={props.filterName} />
        </div>
)

}

export default Filter 
