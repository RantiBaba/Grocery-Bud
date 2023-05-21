//* 1. Import useState from react
//* 2. Import toast from react-toastify
//* 3. Create a Form component
//* 4. Within the Form component, create a state variable called newItemName and a function to set the newItemName variable
//* 5. Create a handleSubmit function that takes in an event parameter
//* 6. Call the preventDefault function on the event parameter
//* 7. If the newItemName variable is an empty string, call the toast.error function and pass in a message
//* 8. Return a form element with an onSubmit prop set to the handleSubmit function
//* 9. Return a h4 element with a text of 'grocery bud'
//* 10. Return a div with a className of form-control
//* 11. Return an input element with a type of text, a className of form-input,
//* a value prop set to the newItemName variable, 
//* an onChange prop set to a function that takes in an event parameter and 
//* calls the setNewItemName function with the event.target.value as the argument, 
//* and a data - testid of 'input-field'
//* 12. Return a button element with a type of submit, a className of btn,
//* and a data - testid of 'submit-button'
//* 13. Export the Form component


import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (!newItemName) {
      toast.error('Please enter a value')
      return
    }

    addItem(newItemName)

    setNewItemName('')
  }

  return (
    <form onSubmit={handleSubmit} data-testid='form'>
      <h4>grocery bud</h4>

      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={e => setNewItemName(e.target.value)}
          data-testid='input-field'
        />
        <button
          type='submit'
          className='btn'
          data-testid='submit-button'
        >
          add item
        </button>
      </div>
    </form>
  )
}
export default Form
