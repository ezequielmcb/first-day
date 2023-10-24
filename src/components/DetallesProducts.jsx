const DetallesProducts = () => {
  return (
    <div className="text-start flex flex-col gap-3 mt-8 bg-slate-200 p-3 rounded-lg w-3/12 h-64"> 
      <h1 className="text-lg font-semibold">Order summary</h1>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1>Subtotal</h1>
          <p>$27.44</p>
        </div>
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <p>$3.99</p>
        </div>
        <div className="flex justify-between">
          <h1>Tax</h1>
          <p>$2.00</p>
        </div>
        <div className="text-black font-semibold flex justify-between">
          <h1>Total</h1>
          <p>$33.43</p>
        </div>
      </div>
      <div className="flex justify-between bg-emerald-800 px-4 py-2 text-white rounded-md">
        <button>Continue to payment</button>
        <img src="/public/arrow.svg" alt="" />
      </div>
    </div>
  )
}

export default DetallesProducts
