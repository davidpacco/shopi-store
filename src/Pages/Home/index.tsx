import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

export function Home() {
  const {
    products,
    isProductDetailOpen,
    isCheckoutSideMenuOpen
  } = useContext(ShoppingCartContext)

  return (
    <>
      <div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
        {
          products?.map(product => (
            <Card
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      { isProductDetailOpen && <ProductDetail /> }
      { isCheckoutSideMenuOpen && <CheckoutSideMenu />}
    </>
  )
}