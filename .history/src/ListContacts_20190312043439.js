import React,{ Component  } from 'react'

class ListContacts extends Component {
  render() {
      console.log('Props',this.props)
      return (
      <ol className='contact-list'> 
          {this.props.contacts.map((contact) => 
            <li>
              {contact.name}
            </li>
            
            )}
      </ol>
      )
  }
}

export default ListContacts