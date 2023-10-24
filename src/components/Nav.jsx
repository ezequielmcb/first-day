const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="text-green-800 font-serif text-xl">World Peas</h1>
      </div>
      <div className="flex gap-6 items-center ">
        <h1 className="cursor-pointer">Shop</h1>
        <h1 className="cursor-pointer">Newstand</h1>
        <h1 className="cursor-pointer">Who we are</h1>
        <h1 className="cursor-pointer">My Profile</h1>
        <button className="p-2 px-3 bg-green-800 rounded-lg">Basket (3)</button>
      </div>
    </nav>
  )
}

export default Nav