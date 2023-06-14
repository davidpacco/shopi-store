export function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-2xl">
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-2">Electronics</span>
        <img className="w-full h-full object-cover rounded-2xl" src="https://picsum.photos/300/200" alt="headphones" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">Product name</span>
        <span className="text-lg font-medium">$999</span>
      </p>
    </div>
  )
}