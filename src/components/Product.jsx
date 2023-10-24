const Product = () => {
  return (
    <div className="flex w-10/12 h-36 gap-3 items-center mt-8 bg-slate-200 p-3 rounded-lg">
      <div className="w-24 rp">
        <img src="/public/tomate.png" alt="" />
      </div>
      <div className="w-full flex flex-col ">
        <div className="flex justify-between">
          <h1 className="font-semibold"> Heierloom tomate</h1>
          <p>$5.99</p> 
        </div>
        <p className="flex text-green-900 font-semibold mb-4">$5.99 / LD</p>
        <div className="flex justify-center gap-6 rounded-xl py-1  bg-white w-20 ">
          <p className="text-xs font-semibold">1 lb </p>
          <img className="w-4" src="/public/edit.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Product
