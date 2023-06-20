type Props = {
  id:number
  totalProducts: number
  totalPrice: number
  date: Date
}

export function OrdersCard({ id, totalProducts, totalPrice, date }: Props) {
  return (
    <div className='h-28 w-80 flex flex-col border rounded-xl p-4 justify-between shadow-md shadow-gray-300 tran'>

      <div className="flex items-center justify-center relative">
        <h3 className="font-bold">ORDER #{id}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-full absolute top-0 right-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      <div className="flex justify-between text-sm">

        <div className="">

          <p className="flex gap-1.5 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </span>
            <span>{ date.toLocaleDateString() }</span>
          </p>

          <p className="flex gap-1.5">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </span>
            <span>{`${totalProducts} ${totalProducts === 1 ? 'item' : 'items'}`}</span>
          </p>
        </div>

        <div className="">
          <p className="flex items-center h-full font-bold text-lg">${ totalPrice }</p>
        </div>

        {/* <div>
          <p className="font-medium">ORDER PLACED</p>
          <p className="font-light">{ date.toLocaleDateString() }</p>
        </div>

        <div className="flex flex-col text-right">
          <p className="font-medium">TOTAL</p>
          <p className="font-light">${ totalPrice }</p>
        </div> */}

      </div>
    </div>
  )
}