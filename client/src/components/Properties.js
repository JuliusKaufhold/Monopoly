import React, { useEffect, useState } from 'react'

const Properties = (props) => {
  const [yourProperties,setYourProperties] = useState([])

  function updateProps () {
    let filteredProps = props.propertylist.filter((property) => {
      return props.socketid===property.owner;
    })
    setYourProperties(filteredProps)
  }

  function canBuyHouse (wantToBuyOn,owner) {
    let x=0
    if(wantToBuyOn===-1){
      x++;
    }
    
    let street = props.propertylist.filter((property) => {
      return property.streetID===wantToBuyOn;
    })

    street.forEach(obj =>{
      if(obj.owner!==owner){
        x++;
      }
      if(obj.streetID===-1){
        x++;
      }
    })
    
    return x===0;
  }

  function propertyIsMortaged(objectID) {
    yourProperties.map(property => {
      if(property.id===objectID){
        console.log("FUNCTION BUTTON",property.isMortaged)
        return property.isMortaged
      }
    })
  }

  useEffect(() => {
    updateProps()
  },[props.propertylist])


  return (
    <div className='bg-gradient-to-br from-slate-700 to-slate-800 h-96 w-1/4 rounded-xl absolute bottom-10 font-roboto font-bold ring-2 ring-slate-500'>
        <h1 className='pt-3 text-slate-100 text-xl'>Properties</h1>
          <ul className='px-3 py-1 space-y-3 font-semibold font-mono text-white'>
           {yourProperties.map(object => (
                <li key={object.id} class='flex justify-between'>
                  <div className='flex justify-start'>
                    <p className='text-lg'>{object.name}</p>
                  </div>
                  <div className='flex justify-end'>
                    {!propertyIsMortaged(object.id)&& <button class="bg-gradient-to-tr from-yellow-300 to-yellow-400 h-6 w-20 mr-5 rounded-md ring-2 ring-black transition duration-300 ease-in-out hover:scale-105"
                    onClick={() => {props.childMortage(object.id,object.housesOnProperty,object.owner)}}>
                      <h1 class="text-black text-md font-mono font-bold">Mortage</h1>
                    </button>}

                    {propertyIsMortaged(object.id) &&  <button class="bg-gradient-to-tr from-yellow-300 to-yellow-400 h-6 w20 mr-5 rounded-md ring-2 ring-black transition duration-300 ease-in-out hover:scale-105"
                    onClick={() => {props.childBuyBack(object.id,object.owner)}}>
                      <h1 class="text-black text-md font-mono font-bold">Buy back</h1>
                    </button>}

                    {canBuyHouse(object.streetID,object.owner) && <button class='bg-gradient-to-tr from-slate-800 to-slate-900  h-6 w-14 mr-5 rounded-md ring-2 ring-black transition duration-300 ease-in-out hover:scale-105'
                    onClick={() => props.childBuyHouse(object.id,object.owner,object.housePrice,object.housesOnProperty)}>
                      <h1 class="text-white font-mono text-md font-bold">Buy</h1>
                    </button>}

                    {canBuyHouse(object.streetID,object.owner) && <button class='bg-gradient-to-tr from-slate-800 to-slate-900  h-6 w-14 rounded-md ring-2 ring-black transition duration-300 ease-in-out hover:scale-105'
                    onClick={() => props.childSellHouse(object.id,object.owner,object.housePrice,object.housesOnProperty)}>
                      <h1 class="text-white font-mono text-md font-bold">Sell</h1>
                    </button>}
                  </div>
                </li>
            ))}
          </ul>
    </div>
  )
}

export default Properties