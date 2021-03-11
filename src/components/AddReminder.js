import React from 'react'

addRem = (event) => {
    event.preventDefault()
    let curName=this.state.currentReminder.name
    let curDate=this.state.currentReminder.date
    if (curName && curDate ) {
       let filter=this.state.reminders.filter(reminder => reminder.name==curName && reminder.date==curDate)
       if (filter.length===0){
        const remObject = {
          name: this.state.currentReminder.name,
          date: this.state.currentReminder.date,
          id: this.state.reminders.length + 1
        }

        const reminders = this.state.reminders.concat(remObject)

        this.setState({
          reminders: reminders,
        //  newName: ''
        })
        
      } else alert('This reminder is already on the list')
     } else alert('Fill in all fields')
  }
  handleNameChange = (event) => {
    //console.log(event.target.value)
    this.setState({ currentReminder: {
      name: event.target.value,
      date: this.state.currentReminder.date
    } })
  }
  handleDateChange = (event) => {
    //console.log(event.target.value)
    this.setState({ currentReminder: {
      name: this.state.currentReminder.name,
      date: event.target.value
    } })
  }
  export default AddRemind