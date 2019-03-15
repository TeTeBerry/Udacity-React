import React, { Component } from 'react';
import  ListContacts  from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
class App extends Component {
    state = {
      contacts : []
    }

    componentDidMount() {
      ContactsAPI.getAll().then((contacts) => {
        this.setState({ contacts })
      })
    }

    removeContact = (contact) => {
      this.setState((state) => ({
        contacts: state.contacts.filter((c) => c.id !== contact.id)
      }))
    
      ContactsAPI.remove(contacts)
    
    
    }
  render() {
    return (
      <div className="app">
         <ListContacts 
         onDeleteContact={this.removeContact} 
         contacts={this.state.contacts}
         />
      <CreateContact/>
      </div>
    )
  }
}

export default App;
