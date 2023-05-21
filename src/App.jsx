//* 1. Import useState hook from React
//* 2. Import Form component
//* 3. Import Items component
//* 4. Import nanoid from nanoid
//* 5. Import ToastContainer and toast from react-toastify
//* 6. Create a defaultList variable that gets the list from localStorage or an empty array
//* 7. Create a setLocalStorage function that sets the list in localStorage
//* 8. Create an App component
//* 9. Create an items state variable and set it to the defaultList variable
//* 10. Create an addItem function that takes in an itemName parameter
//* 11. Create a newItem variable that is an object with a name property set to the itemName parameter, a completed property set to false, and an id property set to nanoid()
//* 12. Create a newItems variable that is an array with the newItem variable spread in
//* 13. Call the setItems function and pass in the newItems variable
//* 14. Call the setLocalStorage function and pass in the newItems variable
//* 15. Call the toast.success function and pass in a message
//* 16. Create a removeItem function that takes in an itemId parameter
//* 17. Create a newItems variable that is an array with the items variable filtered
//* 18. Call the setItems function and pass in the newItems variable
//* 19. Call the setLocalStorage function and pass in the newItems variable
//* 20. Call the toast.success function and pass in a message
//* 21. Create an editItem function that takes in an itemId parameter
//* 22. Create a newItems variable that is an array with the items variable mapped
//* 23. If the item's id matches the itemId parameter, create a newItem variable that is an object with the item spread in and a completed property set to the opposite of the item's completed property
//* 24. If the item's id does not match the itemId parameter, return the item
//* 25. Call the setItems function and pass in the newItems variable
//* 26. Call the setLocalStorage function and pass in the newItems variable
//* 27. Call the toast.success function and pass in a message
//* 28. Return a div with a className of container
//* 29. Return a h1 with a text of 'grocery bud'
//* 30. Return a Form component with an addItem prop set to the addItem function
//* 31. Return a Items component with an items prop set to the items variable, a removeItem prop set to the removeItem function, and an editItem prop set to the editItem function
//* 32. Return a ToastContainer component
//* 33. Export the App component












import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import Items from './Items'

const defaultList = JSON.parse(
  localStorage.getItem('list') || '[]'
)

const setLocalStorage = items => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState(defaultList)

  const addItem = itemName => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added to the list!')
  }

  const removeItem = itemId => {
    const newItems = items.filter(
      item => item.id !== itemId
    )
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item deleted from the list!')
  }

  const editItem = itemId => {
    const newItems = items.map(item => {
      if (item.id === itemId) {
        const newItem = {
          ...item,
          completed: !item.completed,
        }
        return newItem
      }
      return item
    })

    setItems(newItems)
    setLocalStorage(newItems)
    toast.info('Item completed!')
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        editItem={editItem}
      />
      <ToastContainer
        draggable={true}
        closeOnClick={true}
        position='top-right'
        autoClose={2000}
      />
    </section>
  )
}

export default App
