import SingleItem from './SingleItem'

//* 1. Import the SingleItem component
//* 2. Map over the items array and render a SingleItem component for each item
//* 3. Pass the item and removeItem function as props to the SingleItem component
//* 4. Add a key prop to the SingleItem component and set it to the item's id
//* 5. Add a className of items to the div that wraps the SingleItem components

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map(item => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        )
      })}
    </div>
  )
}
export default Items
