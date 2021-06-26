import React, { Component } from 'react';

import './App.css';
import shortid from "shortid"

// Components
import ContactForm from './Components/contactForm';
import ContactList from './Components/contactList';
import Filter from './Components/filter';


class App extends Component {
  inputId = shortid.generate();

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  };

  onInputChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
  };
  
  filterContacts = evt => this.setState({ filter: evt.target.value });

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
   
  };
  
  handleSubmit = evt => {
        evt.preventDefault();

        this.addContact(this.state.name, this.state.number);
        this.setState({ name: "", number: "" });
  };
  
  addContact = (valueName, valueNumber) => {
        const contactId = shortid.generate()
        const data = { id: contactId, name: valueName, number: valueNumber };

        this.state.contacts.map(contact => {
            if (contact.name === valueName && contact.number === valueNumber) {
                alert(`${valueName} is already in contacts!`)
                return;
            }  
        });
    this.setState(prevState =>
            ({ contacts: [data, ...prevState.contacts] }));
  };
  
  deleteContact = idContact => {
        this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== idContact)}))
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem('contacts');
    const parseStorageContacts = JSON.parse(storageContacts);
    if(parseStorageContacts) this.setState({ contacts: parseStorageContacts });
    
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('state is update!');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };
    
  render() {
    // const { filter, contacts } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="Container">
         <h2>Phonebook</h2>
        <ContactForm
          handleSubmit={this.handleSubmit}
          inputId={this.inputId}
          name={this.state.name}
          number={this.state.number}
          onInputChange={this.onInputChange}
        />
        
        <h2>Contacts</h2>
        
        <Filter onSearchInput={this.filterContacts} value={this.state.filter} />
        
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        
      </div>
    )
  };
};


export default App;
