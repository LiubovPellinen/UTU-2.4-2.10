import React from 'react'

const Reminder = ({ reminder, deleteReminder }) => {

  return (
    
    <tr>
      <td>{reminder.date.toString().replace('T'," ")}</td>
      <td className="remName">{reminder.name} </td>
      <td> <button className="delete" onClick={deleteReminder} >Delete</button></td>
    </tr>

  )
}

export default Reminder
