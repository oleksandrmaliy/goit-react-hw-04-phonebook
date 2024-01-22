import React, { Component } from "react";

import ContactsList from './Contacts';
import Filter from './Filter/';
import ContactForm from './Form';
import TitleDiv from './Title';

const INITIAL_STATE = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

export class App extends Component {
  
  state = {
    contacts: [ 
      ...INITIAL_STATE
    ],
    filter: '',
  }

  addContact = newContact => {
    const allContacts = this.state.contacts;
    const contactExists = allContacts.find(
      contact => contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );

    if (contactExists) {
      alert(`${newContact.name.trim()} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))
    
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };
  
   filterChange = event => {
    const {name, value} = event.currentTarget;
    this.setState( {[name]: value} );
  };

  componentDidMount () {
    const lsMyContacts = JSON.parse(localStorage.getItem('myContacts'));
    if(lsMyContacts){
      this.setState({contacts: lsMyContacts});
    }
  }

  componentDidUpdate (_, prevState) {
    const {contacts} = this.state;
    if(prevState.contacts.length !== contacts.length) {
      localStorage.setItem('myContacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  
    return (
      <div>
        <TitleDiv title='Phonebook'/>
        <ContactForm addContact={this.addContact}/>
        <TitleDiv title='Contacts'/>
        <Filter value={filter} onChange={this.filterChange}/>
        <ContactsList filteredContacts={filteredContacts} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}
