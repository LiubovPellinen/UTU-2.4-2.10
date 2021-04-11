import React from 'react'

const Reminder = ({ reminder, deleteReminder }) => {
    let strWithoutT=reminder.date.toString().replace('T'," ")
  return (
    
    <tr>
      <td>{strWithoutT.substr(0,strWithoutT.length-8)}</td>
      <td className="remName">{reminder.name} </td>
      <td> <button className="delete" onClick={deleteReminder} >Delete</button></td>
    </tr>

  )
}

export default Reminder
