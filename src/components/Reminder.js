import React from 'react'

const Reminder = ({ reminder }) => {
  
  return (
        <li> {reminder.date.toString().replace('T',"   ")} {reminder.name}  </li>
  )
}

export default Reminder
