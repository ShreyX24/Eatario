import React from 'react'

const OrdersLoadingScreen = () => {
  return (
    <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img src="./assests/icons/list.gif" alt="" height="170" width="170"/>
          <span className="text-2xl text-gray-500">Nothing here! Come lets order some food.</span>
        </div>
      </div>
    </div>
  )
}

export default OrdersLoadingScreen