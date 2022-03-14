
export const ProductItem =({product})=> {
  return(
    <div className="card-size">
      <img src="..." className="card-img-top image-size" alt="card-img" />
      <div className="card-body">
        <h4>
          {product.stock ? 'ფასდაკლება' : 'ფასდაკლების გარეშე'}
        </h4>
        <h6>{product.brend} {product.category} {product.processor} {product.model}</h6>
        <h6>{product.name} {product.motherBoard}</h6>
        <h6>SSD {product.hdd} / RAM {product.ram}</h6>
        <h3>
          ფასი: {product.price}
        </h3>
      </div>
    </div>
  )
}