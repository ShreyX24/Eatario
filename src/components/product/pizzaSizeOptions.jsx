import React from 'react'

const PizzaSizeOptions = ({sizeButtonClass, setItemSize}) => {
  return (
    <ul className="flex gap-6 items-center [&>*]:cursor-pointer">
          <li
            className={sizeButtonClass("Small")}
            onClick={() => {
              setItemSize("Small");
            }}
          >
            Small
          </li>
          <li
            className={sizeButtonClass("Medium")}
            onClick={() => {
              setItemSize("Medium");
            }}
          >
            Medium
          </li>
          <li
            className={sizeButtonClass("Large")}
            onClick={() => {
              setItemSize("Large");
            }}
          >
            Large
          </li>
        </ul>
  )
}

export default PizzaSizeOptions