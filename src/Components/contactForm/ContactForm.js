import './ContactForm.css';

function ContactForm({ handleSubmit, inputId, name, number, onInputChange }) {
    
    return (
        <div className="Container-form">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor={inputId}>
                            Name
                            <br></br>
                            <input
                                className="Container-form__input"
                                type="text"
                                name="name"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                required
                                value={name}
                                onChange={onInputChange}
                                // id={props.inputId}
                            />
                        </label>
                        <br></br>
                        <label>
                            Number
                            <br></br>
                            <input
                                className="Container-form__input"
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                                required
                                value={number}
                                onChange={onInputChange}
                                // id={props.inputId}
                            />
                        </label>
                        <br></br>
                      <button type="submit" className="Container-form__btn">Add Contact</button>  
                    </form>
                 
                </div>
    )
};


export default ContactForm;