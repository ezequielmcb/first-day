import './App.css'
import DetallesProducts from './components/DetallesProducts'
import Nav from './components/Nav'
import Product from './components/Product'

function App() {
  return (
    <>
      <Nav />
      <div className="mt-10 flex gap-5">
        <h1 className="text-6xl font-serif">Basket</h1>
        <p className="mt-10 text-xs">3 items</p>
      </div>
      <div className="flex">
        <div className="w-full">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <DetallesProducts />
      </div>
    </>
  )
}

export default App
