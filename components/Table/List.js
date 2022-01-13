import React from 'react'

const List = (props) => {
    const {color,ToolName,star} = props 
    if(!star){
        return (
            <div>
                <tr className={color}>
                    <td className="border px-4 py-2 w-1/4">{ToolName}</td>
                </tr>
            </div>
        )
    }else{
        return (
            <div>
                <tr className={color}>
                    <td className="border px-4 py-2 w-1/5">{ToolName}</td>
                    <td className="border px-4 py-2 w-1/5">{star}</td>
                </tr>
            </div>
        )
    }
}

export default List
