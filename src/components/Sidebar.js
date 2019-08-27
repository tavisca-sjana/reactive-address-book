import React , {Component} from 'react';


class Sidebar extends Component
{
    

    render()
    {
       return (

        <div className="Sidebar">
            {
                 this.props.contacts.map((contact) => (
                    <h3 onClick={this.props.markClicked.bind(this,contact.id)}>{contact.firstName} {contact.lastName}</h3>
               ))
          
            
            }
        </div>
       )
           
          
        
    }
}

export default Sidebar
