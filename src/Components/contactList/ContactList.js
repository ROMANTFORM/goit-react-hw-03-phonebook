import './ContactList.css';

const ContactList = ({contacts, onDeleteContact }) => {
    
    return (
        <div className="Contact-container">
                <ul className="Contact-container__list">
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className="Contact-container__item">{name}: {number}
                        <button onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
                </ul>
            </div>
    )
};

export default ContactList;