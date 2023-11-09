import PropTypes from 'prop-types';
import { List, ListItem } from './Contacts.styled';

function ContactsList ({filteredContacts, deleteContact}){
    return (
         <List>
            {filteredContacts.map(({id, name, number}) => 
            <ListItem key={id}>{name}: {number} <button type='button' onClick={() => deleteContact(id)}>Delete</button></ListItem>
            )}
        </List>
   )}
   
export default ContactsList;

ContactsList.propTypes = {
    filteredContacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
     };