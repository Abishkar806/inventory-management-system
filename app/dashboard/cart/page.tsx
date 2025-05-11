"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Trash2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

// Sample cart data with furniture items
const initialCartItems = [
  {
    id: 1,
    name: "Modern L-Shaped Sectional Sofa",
    price: 1299.99,
    quantity: 1,
    image: "/modern-l-shaped-sectional.png",
    category: "Sofas",
    color: "Gray",
    material: "Fabric",
  },
  {
    id: 2,
    name: "Rustic Wooden Coffee Table",
    price: 349.99,
    quantity: 1,
    image: "/rustic-wooden-coffee-table.png",
    category: "Tables",
    color: "Brown",
    material: "Solid Wood",
  },
  {
    id: 3,
    name: "Marble Top Dining Table",
    price: 899.99,
    quantity: 1,
    image: "/marble-top-dining-table.png",
    category: "Tables",
    color: "White/Black",
    material: "Marble & Metal",
  },
]

export default function CartPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [shippingMethod, setShippingMethod] = useState("standard")

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = shippingMethod === "express" ? 99.99 : 49.99
  const discount = promoCode === "FURNITURE10" ? subtotal * 0.1 : 0
  const total = subtotal + shipping - discount

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    })
  }

  const handleApplyPromo = () => {
    if (promoCode === "FURNITURE10") {
      toast({
        title: "Promo code applied",
        description: "10% discount has been applied to your order.",
      })
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please enter a valid promo code. Try 'FURNITURE10'.",
        variant: "destructive",
      })
    }
  }

  const handleCheckout = () => {
    router.push("/dashboard/checkout")
    toast({
      title: "Proceeding to checkout",
      description: "You're being redirected to the checkout page.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Shopping Cart
        </h1>
        <p className="text-muted-foreground">Review and update your furniture selections before checkout.</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
                <CardDescription>Furniture items you've added to your cart</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{item.category}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{item.color}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{item.material}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <div className="w-20 text-right font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/products">Continue Shopping</Link>
                </Button>
                <Button onClick={handleCheckout} className="bg-gradient-to-r from-orange-500 to-red-500">
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shipping">Shipping Method</Label>
                  <Select value={shippingMethod} onValueChange={setShippingMethod}>
                    <SelectTrigger id="shipping">
                      <SelectValue placeholder="Select shipping method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Shipping ($49.99)</SelectItem>
                      <SelectItem value="express">Express Shipping ($99.99)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Standard: 5-7 business days | Express: 2-3 business days
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="promo">Promo Code</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="promo"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={handleApplyPromo}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Try code: FURNITURE10</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Your cart is empty</h2>
              <p className="text-muted-foreground">Looks like you haven't added any furniture to your cart yet.</p>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500">
                <Link href="/dashboard/products">Browse Furniture</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
