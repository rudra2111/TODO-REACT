import React, {Component} from 'react'



const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Serial_Number</th>
                <th>taskName</th>
                <th>Description</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
            <td>{row.Serial_Number}</td>
            <td>{row.taskName}</td>
            <td>{row.Description}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }
  

const Table = (props) => {
    const { characterData, removeCharacter } = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
  
export default Table