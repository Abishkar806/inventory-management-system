"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, Download, Home, Printer, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OrderConfirmationPage() {
  // Sample order data
  const order = {
    id: "ORD-1234",
    date: "May 11, 2025",
    status: "Processing",
    total: 125.0,
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        quantity: 1,
        price: 79.99,
        image: "/diverse-people-listening-headphones.png",
      },
      { id: 2, name: "USB-C Cable (3-pack)", quantity: 1, price: 19.99, image: "/usb-cable.png" },
      { id: 3, name: "Screen Protector", quantity: 1, price: 12.99, image: "/screen-protector.png" },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Anytown, CA 12345",
      tracking: null,
      estimatedDelivery: "May 15-18, 2025",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "4242",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center text-center space-y-4 py-6">
        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Order Confirmed!
        </h1>
        <p className="text-muted-foreground max-w-md">
          Thank you for your order. We've received your order and will begin processing it right away.
        </p>
      </div>

      <Card className="border-2 border-green-100 hover:shadow-md transition-all">
        <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-green-700">Order #{order.id}</CardTitle>
              <CardDescription>Placed on {order.date}</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <ShoppingBag className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-green-700">Order Status: {order.status}</h3>
                <p className="text-sm text-muted-foreground">Estimated delivery: {order.shipping.estimatedDelivery}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-700 mb-2">Shipping Information</h3>
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <Home className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Shipping Address</p>
                    <p className="text-sm text-muted-foreground">{order.shipping.address}</p>
                  </div>
                </div>
                <Separator className="my-3" />
                <div>
                  <p className="font-medium">Shipping Method</p>
                  <p className="text-sm text-muted-foreground">{order.shipping.method}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-2">Payment Information</h3>
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <div className="flex items-center">
                  <div className="h-8 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold text-xs mr-2">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">Credit Card</p>
                    <p className="text-sm text-muted-foreground">**** **** **** {order.payment.cardLast4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-green-700 mb-2">Order Summary</h3>
            <div className="bg-white rounded-lg border border-green-100 overflow-hidden">
              <div className="divide-y divide-green-100">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center p-4 hover:bg-green-50">
                    <div className="h-16 w-16 rounded-md overflow-hidden mr-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      ${order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$5.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$7.04</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-green-700">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-green-50 border-t border-green-100 flex justify-between">
          <Button variant="outline" asChild className="border-green-200 text-green-700 hover:bg-green-100">
            <Link href="/dashboard/orders">View All Orders</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
          >
            <Link href="/dashboard/products">
              Continue Shopping
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-2 border-green-100">
        <h2 className="text-xl font-bold text-green-700 mb-4">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg border border-green-100">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <span className="font-bold text-green-600">1</span>
            </div>
            <h3 className="font-medium text-green-700 mb-1">Order Processing</h3>
            <p className="text-sm text-muted-foreground">
              We're preparing your order for shipment. You'll receive an email when it's on its way.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-100">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <span className="font-bold text-green-600">2</span>
            </div>
            <h3 className="font-medium text-green-700 mb-1">Shipping</h3>
            <p className="text-sm text-muted-foreground">
              Your order will be shipped via {order.shipping.method}. Estimated delivery:{" "}
              {order.shipping.estimatedDelivery}.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-100">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <span className="font-bold text-green-600">3</span>
            </div>
            <h3 className="font-medium text-green-700 mb-1">Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Once your order is delivered, you can track and manage it from your Orders page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
