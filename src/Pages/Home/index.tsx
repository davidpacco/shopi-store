import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

export function Home() {
  const {
    setSearchedTitle,
    filteredProducts,
    isProductDetailOpen,
    isCheckoutSideMenuOpen
  } = useContext(ShoppingCartContext)

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="h-10 w-80 rounded-full border border-black p-5 mb-6 focus:outline-none"
        onChange={(e) => setSearchedTitle(e.target.value)}
      />
      <div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
        {
          filteredProducts?.map(product => (
            <Card
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      {filteredProducts.length === 0 &&
        <p className="text-center">No products to show</p>
      }
      { isProductDetailOpen && <ProductDetail /> }
      { isCheckoutSideMenuOpen && <CheckoutSideMenu />}
    </>
  )
}