import React from 'react';
//import AddReminder from './components/Addreminder'
import Reminder from './components/Reminder';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [
        {
          name: 'Buy some eggs',
          date: "2018-11-10 13:00",
          id: 0
        }
      ],
      currentReminder: {
        name: '',
        date: ''
      }
    }
  }
  addRem = (event) => {
    event.preventDefault()
    let curName=this.state.currentReminder.name
    let curDate=this.state.currentReminder.date
    if (curName && curDate ) {
       let filter=this.state.reminders.filter(reminder => reminder.name===curName && reminder.date===curDate)
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
 

  render() {

    return (
      <div>
        <div>
          debug: {this.state.currentReminder.name}
          debug: {this.state.currentReminder.date}
        </div>
        <h2>Add new reminder</h2>
        <form onSubmit={this.addRem} >
          <div>
            Name: <input value={this.state.currentReminder.name}
              onChange={this.handleNameChange} />
          </div>
          <div>
            Date: <input type="datetime-local" value={this.state.currentReminder.date}
              onChange={this.handleDateChange} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2>Reminders:</h2>
        <ul>
          {this.state.reminders.map(reminder =>
            <Reminder key={reminder.id} reminder={reminder} />
          )}
        </ul>
      </div>
    )
  }
}

export default App

