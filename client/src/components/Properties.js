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

  useEffect(() => {
    updateProps()
  },[props.propertylist])


  return (
    <div className='bg-gradient-to-br from-slate-700 to-slate-800 h-96 w-1/4 rounded-xl absolute bottom-10 font-roboto font-bold text-lg ring-2 ring-slate-500'>
        <h1 className='pt-3 text-slate-100 text-xl'>Properties</h1>
          <ul className='px-3 py-1 space-y-3 font-semibold font-mono text-green-200'>
           {yourProperties.map(object => (
                <li key={object.id}>
                  <div className='flex justify-start'>
                    <p className=''>{object.name}</p>
                  </div>
                  <div className='flex justify-end'>
                    {canBuyHouse(object.streetID,object.owner) && <button classname='bg-gradient-to-tr from-slate-800 to-slate-900 absolute top-8 right-4 h-12 w-32 rounded-2xl ring-2 ring-black transition duration-300 ease-in-out hover:scale-105 text-white font-mono text-lg font-bold'
                    onClick={() => props.childBuyHouse(object.id,object.owner,object.housePrice,object.housesOnProperty)}>
                      Buy
                    </button>}
                    {canBuyHouse(object.streetID,object.owner) && <button classname='bg-gradient-to-tr from-slate-800 to-slate-900 absolute top-8 right-4 h-12 w-32 rounded-2xl ring-2 ring-black transition duration-300 ease-in-out hover:scale-105 text-white font-mono text-lg font-bold'
                    onClick={() => props.childSellHouse(object.id,object.owner,object.housePrice,object.housesOnProperty)}>
                      Sell
                    </button>}
                  </div>
                </li>
            ))}
          </ul>
    </div>
  )
}

export default Properties