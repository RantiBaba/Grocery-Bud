//* 1. Create a SingleItem component that renders a single item
//* 2. Within the SingleItem component, render an input, a paragraph, and a button
//* 3. The input should be a checkbox
//* 4. Within the input, set the checked prop to the item's completed property
//* 5. Within the input, set the onChange prop to the editItem function
//* 6. Within the paragraph, set the text to the item's name
//* 7. Within the paragraph, set the style prop to an object with a textTransform property set to 'capitalize'
//* 8. Within the paragraph, set the style prop to an object with a textDecoration property set to 'line-through' if the item's completed property is true
//* 9. Within the button, set the onClick prop to the removeItem function
//* 10. Add a className of single-item to the div that wraps the input, paragraph, and button
//* 11. Add a className of remove-btn to the button
//* 12. Add a className of single-item to the div that wraps the input, paragraph, and button

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
        data-testid={`checkbox`}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
        data-testid='delete-btn'
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
