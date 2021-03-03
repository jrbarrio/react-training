import { Component } from 'react';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'Jorge',
                    surname: 'Roldan',
                    age: 42
                }, 
                {
                    name: 'Alicia',
                    surname: 'Roldan',
                    age: 9
                },
                {
                    name: 'Beatriz',
                    surname: 'Fresno',
                    age: 42
                }, 
                {
                    name: 'Manuel',
                    surname: 'Roldan',
                    age: 7
                }
            ]
        };
    }    

    removeContact(index) {
        const contactsCopy = [ ...this.state.contacts];
        contactsCopy.splice(index, 1);
        this.setState({ contacts: contactsCopy });
    }

    updateName(event, index) {
        const contactCopy = { ...this.state.contacts[index]};
        contactCopy.name = event.target.value;

        const contactsCopy = [ ...this.state.contacts ];
        contactsCopy[index] = contactCopy;
        
        this.setState({ contacts: contactsCopy });
    }

    render() {
        return (<div className="contacts">
            { (this.state.contacts || []).map( (contact, index) =>
                (<div className="contact" key={ index }>
                    <h4 onClick={ () => this.removeContact(index) }>{ contact.name } { contact.surname }</h4>
                    <p>{ contact.age }</p>
                    <input type="text" value={ contact.name } onChange={ (event) => {
                        this.updateName(event, index) 
                    } }></input>
                </div>)
            )}
        </div>);
    }
}

export default Lists;