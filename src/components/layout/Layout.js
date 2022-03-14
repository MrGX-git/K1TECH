
const sizes = {
  default: 'container',
  fluide: 'container-fluid',
}

export const Layout =({children, className, size="default"})=> {
    return (
      <div className={`${sizes[size]} ${className}`}>
          {children}
      </div>
    )
}