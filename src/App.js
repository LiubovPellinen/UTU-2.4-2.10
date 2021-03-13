import React from 'react';
import AddReminder from './components/AddReminder'
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

    }
  }
  addReminder = (name, date) => {
    if (name && date) {
      let filter = this.state.reminders.filter(reminder => reminder.name === name && reminder.date === date)
      if (filter.length === 0) {
        const remObject = {
          name,
          date,
          id: this.state.reminders.length + 1
        }
        const reminders = this.state.reminders.concat(remObject)
        this.setState({
          reminders: reminders,
        })

      } else alert('This reminder is already on the list')
    } else alert('Fill in all fields')
  }
   render() {
    return (
      <div>
        <h2>Add new reminder</h2>
        <AddReminder addReminder={this.addReminder} />
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

