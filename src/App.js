import React,{Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

class App extends Component {
  
  state = {
    Contacts:[
      {
        id:1,
        firstName:'Soumyadeep',
        lastName:'Jana',
        clicked:false
      },
      {
        id:2,
        firstName:'Raj',
        lastName:'Shekhar',
        clicked:false
      }
      
    ],

   
    
  
  }

  markClicked = (id) => {
    this.setState({ Contacts:
      this.state.Contacts.map((contact) => {
        if(id === contact.id)
        {
          contact.clicked = true;
        }
        return contact;
      })
    })
  
    console.log(id);
  }

  editName = (name) => {
    console.log(`${name.id} clicked`)
    console.log(`${name.firstName} clicked`)
    console.log(`${name.lastName} clicked`)
    this.setState({ Contacts:
      this.state.Contacts.map((contact) => {
        if(name.id == contact.id)
        {
          contact.clicked= !contact.clicked;
          contact.firstName = name.firstName;
          contact.lastName = name.lastName;
          //console.log(`Hello ${contact.firstName}`)
          
        }
        return contact;
      })
    })
  }

 

  render()
  {
    return (
      <div className="App">
        <Sidebar contacts={this.state.Contacts} markClicked={this.markClicked} />
        <MainContent editContact={this.state.Contacts} editName={this.editName}/>
      </div>
    );
  }

}
 


export default App;
