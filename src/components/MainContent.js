import React , {Component} from 'react';

class MainContent extends Component
{
    state = {
        name:{
            firstName:'',
            lastName:'',
            id:-1
        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            name:{firstName:e.target.value,lastName:this.state.name.firstName,id:e.target.id}
            
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            name:{lastName:e.target.value,firstName:this.state.name.firstName,id:e.target.id}
            
        })
    }

    onEdit = (e) => {
        e.preventDefault();
        this.props.editName(this.state.name);
       
    }

    
    render()
    {
        return(
            <div className='MainContent'>
                {
                    this.props.editContact.map((contact) => (
                        
                        (contact.clicked)?
                        <form onSubmit={this.onEdit}>
                            <input type='text' id = {contact.id} name='firstName'  onChange={this.onChangeFirstName}/>
                            <input type='text' name='lastName' id={contact.id}   onChange={this.onChangeLastName}/>
                            <input type='submit'  value='edit' />
                        </form>
                        :
                        <p></p>

                    ))

                    

                }
            </div>
            
        )
    }
}

export default MainContent;