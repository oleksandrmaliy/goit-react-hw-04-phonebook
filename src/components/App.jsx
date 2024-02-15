import React, { useState, useEffect, useRef } from "react";

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

const App = () => {

  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem('myContacts'));
    return data || [...INITIAL_STATE];
  });
  const [filter, setFilter] = useState('');
  
  // state = {
  //   contacts: [ 
  //     ...INITIAL_STATE
  //   ],
  //   filter: '',
  // }

  // console.log(contacts);
  const firstRender = useRef(true);

  useEffect(() => {
    if(!firstRender.current){
      localStorage.setItem('myContacts', JSON.stringify(contacts));
      // console.log(firstRender.current);
    }
  }, [contacts]);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const addContact = (newContact) => {
    // const allContacts = this.state.contacts;
    const contactExists = contacts.find(
      contact => contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );

    if (contactExists) {
      alert(`${newContact.name.trim()} is already in contacts`);
      return;
    }

    setContacts([newContact, ...contacts])
    
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  };
  
  
  const filterChange = ({currentTarget}) => {
    // const {name, value} = event.currentTarget;
    setFilter(currentTarget.value);
  };

  // useEffect (() => {
  //   const lsMyContacts = JSON.parse(localStorage.getItem('myContacts'));
  //   if(lsMyContacts){
  //     setContacts(lsMyContacts);
  // }}, []);

  // componentDidMount () {
  //   const lsMyContacts = JSON.parse(localStorage.getItem('myContacts'));
  //   if(lsMyContacts){
  //     this.setState({contacts: lsMyContacts});
  //   }
  // }
  

  // componentDidUpdate (_, prevState) {
  //   const {contacts} = this.state;
  //   if(prevState.contacts.length !== contacts.length) {
  //     localStorage.setItem('myContacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  // render() {
  //   const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  
    return (
      <div>
        <TitleDiv title='Phonebook'/>
        <ContactForm addContact={addContact}/>
        <TitleDiv title='Contacts'/>
        <Filter value={filter} onChange={filterChange}/>
        <ContactsList filteredContacts={filteredContacts} deleteContact={deleteContact}/>
      </div>
    )
  }


export default App;