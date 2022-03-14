
import { useState } from 'react'
// import  debounce  from 'lodash/debounce'

import { ProductItem } from '../products/ProductItem'
import { Button, TextInput, DropDown, Form } from '../../stars'

import productsData from '../../Product.json'

import './products.css'

export const Products =()=> {
    const [inStockOnly, setInstockOnly] = useState(false)
    const [filterTerm, setFilterTerm] = useState('')

    const renderProduct =()=> {
      let data = productsData.slice()
      if(inStockOnly) {
        data = data.filter((item) => item.stock)
      }
      if(filterTerm && filterTerm.length > 1) {
        data = data.filter((el) => el.name.includes(filterTerm))
      }
      return data.map((item, index) => {
        return <ProductItem product={item} kay={index}/>
      })
    }
    
    return (
        <div className='sect-size'>
          <Form>
            <div>
              <div className='col-12'>
                <TextInput 
                  placeholder="ძიება...."
                  value={filterTerm} 
                  onChange={({target}) => {
                    setFilterTerm(target.value)
                  }} 
                />
              </div>
              <div>
                <Button
                  className='btn btn-outline-info'
                  type= 'Button'
                  onClick={()=>setInstockOnly(!inStockOnly)}
                  text={inStockOnly ? 'სრული პროდუქცია' : 'ფასდაკლება'}
                >
                </Button>
              </div>
            </div>
          </Form>
            <DropDown closedTitle="პროდუქციის ნახვა" opendTitle="პროდუქციის დამალვა">
              {renderProduct()}
            </DropDown>
        </div>
    )
}