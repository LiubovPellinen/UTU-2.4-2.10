import React from 'react'
import axios from 'axios'
import AddReminder from './components/AddReminder'
import Reminder from './components/Reminder'
import './index.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],

    }
  }
  componentDidMount() {

    axios
      .get('http://localhost:3001/reminders')
      .then(response => {
        this.setState({ reminders: response.data })
      })
  }
  addReminder = (name, date) => {
   let date_field=date.toString().replace('T'," ");
    if (name && date) {
      let filter = this.state.reminders.filter(reminder => reminder.name === name && reminder.date === date_field)
      if (filter.length === 0) {
        const remObject = {
          name,
          date:date_field
        }
       
        axios.post('http://localhost:3001/reminders', remObject)
          .then(response => {
            this.setState({
              reminders: this.state.reminders.concat(response.data),
              
            })
          })

      } else alert('This reminder is already on the list')
    } else alert('Fill in all fields')
  }
  deleteReminderOf = (id) => {
    return () => {
      const url = `http://localhost:3001/reminders/${id}`
      const question=window.confirm("Do you really want to delete this reminder?")
      if(question){
      axios
        .delete(url)
        .then(response => {
            this.setState({
            reminders: this.state.reminders.filter(reminder => reminder.id!==id)
          })
        })
      }
    }
  }


  render() {
    return (
      <div className="reminders">
        <h2 >Add new reminder</h2>
        <AddReminder addReminder={this.addReminder} />
        <h2>Reminders:</h2>
        <table>
        <tbody>  
          
          {this.state.reminders.map(reminder =>
            <Reminder key={reminder.id} reminder={reminder} deleteReminder={this.deleteReminderOf(reminder.id)} />
          )}
        </tbody>
        </table>
      </div>
    )
  }
}

export default App

