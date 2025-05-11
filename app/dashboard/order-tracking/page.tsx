"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, Package, Search, Truck } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

export default function OrderTrackingPage() {
  const { toast } = useToast()
  const [trackingNumber, setTrackingNumber] = useState("")
  const [orderNumber, setOrderNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)

  // Sample tracking data
  const sampleTrackingData = {
    orderNumber: "ORD-1233",
    trackingNumber: "TRK123456789",
    carrier: "Global Express",
    status: "In Transit",
    estimatedDelivery: "May 15, 2025",
    origin: "Los Angeles, CA",
    destination: "Anytown, CA",
    items: [
      { id: 1, name: "Bluetooth Speaker", quantity: 1, price: 59.99, image: "/audio-speaker.png" },
      { id: 2, name: "Phone Case", quantity: 1, price: 19.99, image: "/phone-case.png" },
    ],
    trackingHistory: [
      {
        date: "May 10, 2025 - 9:30 AM",
        location: "Los Angeles, CA",
        status: "Package picked up by carrier",
        completed: true,
      },
      {
        date: "May 11, 2025 - 2:15 PM",
        location: "Regional Distribution Center",
        status: "Package arrived at sorting facility",
        completed: true,
      },
      {
        date: "May 12, 2025 - 8:45 AM",
        location: "Regional Distribution Center",
        status: "Package departed sorting facility",
        completed: true,
      },
      {
        date: "May 13, 2025 - 10:30 AM",
        location: "Local Distribution Center",
        status: "Package arrived at local facility",
        completed: false,
      },
      {
        date: "May 14, 2025 - Estimated",
        location: "Local Distribution Center",
        status: "Out for delivery",
        completed: false,
      },
      {
        date: "May 15, 2025 - Estimated",
        location: "Anytown, CA",
        status: "Delivered",
        completed: false,
      },
    ],
  }

  const handleTrackByNumber = () => {
    if (!trackingNumber) {
      toast({
        title: "Tracking number required",
        description: "Please enter a tracking number to track your order.",
        variant: "destructive",
      })
      return
    }

    // Simulate tracking lookup
    if (trackingNumber === "TRK123456789") {
      setTrackingResult(sampleTrackingData)
    } else {
      toast({
        title: "Tracking information not found",
        description: "We couldn't find tracking information for the provided number. Try TRK123456789 for a demo.",
        variant: "destructive",
      })
    }
  }

  const handleTrackByOrder = () => {
    if (!orderNumber) {
      toast({
        title: "Order number required",
        description: "Please enter an order number to track your order.",
        variant: "destructive",
      })
      return
    }

    // Simulate order lookup
    if (orderNumber === "ORD-1233") {
      setTrackingResult(sampleTrackingData)
    } else {
      toast({
        title: "Order not found",
        description: "We couldn't find the order with the provided number. Try ORD-1233 for a demo.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Track Your Order
        </h1>
        <p className="text-muted-foreground">Enter your tracking or order number to get real-time updates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-blue-700">Track by Tracking Number</CardTitle>
            <CardDescription>Enter the tracking number provided in your shipping confirmation.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="trackingNumber">Tracking Number</Label>
                <div className="flex space-x-2">
                  <Input
                    id="trackingNumber"
                    placeholder="e.g., TRK123456789"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    onClick={handleTrackByNumber}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Track
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Try TRK123456789 for a demo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardTitle className="text-purple-700">Track by Order Number</CardTitle>
            <CardDescription>Enter your order number to check its status and tracking information.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orderNumber">Order Number</Label>
                <div className="flex space-x-2">
                  <Input
                    id="orderNumber"
                    placeholder="e.g., ORD-1233"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="border-purple-200 focus:border-purple-400"
                  />
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                    onClick={handleTrackByOrder}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Track
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Try ORD-1233 for a demo</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {trackingResult && (
        <Card className="border-2 border-green-100 hover:shadow-md transition-all">
          <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-green-700">Tracking Information</CardTitle>
                <CardDescription>
                  Order #{trackingResult.orderNumber} | Tracking #{trackingResult.trackingNumber}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Status:</span>
                <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {trackingResult.status}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Carrier</h3>
                <p className="font-medium text-green-700">{trackingResult.carrier}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Estimated Delivery</h3>
                <p className="font-medium text-green-700">{trackingResult.estimatedDelivery}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Destination</h3>
                <p className="font-medium text-green-700">{trackingResult.destination}</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-4">Tracking Progress</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  {trackingResult.trackingHistory.map((event: any, index: number) => (
                    <div key={index} className="relative pl-10">
                      <div
                        className={`absolute left-0 top-1 h-8 w-8 rounded-full flex items-center justify-center ${
                          event.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {event.completed ? (
                          <Check className="h-5 w-5" />
                        ) : index === 3 ? (
                          <Package className="h-5 w-5" />
                        ) : index === 4 ? (
                          <Truck className="h-5 w-5" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                        )}
                      </div>
                      <div className={`${event.completed ? "text-green-700" : "text-gray-500"} font-medium`}>
                        {event.status}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {event.date} - {event.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium text-green-700 mb-4">Order Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trackingResult.items.map((item: any) => (
                  <div key={item.id} className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                    <div className="h-16 w-16 rounded-md overflow-hidden mr-4">
                      <ImageWithFallback
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
            </div>
          </CardContent>
        </Card>
      )}

      {!trackingResult && (
        <Card className="border-2 border-gray-100">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="relative h-32 w-32 mb-4">
              <ImageWithFallback
                src="/package-tracking.png"
                alt="Package Tracking"
                width={300}
                height={200}
                className="object-contain mx-auto mb-6"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Track Your Shipment</h2>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              Enter your tracking number or order number above to get real-time updates on your shipment.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
            >
              <Link href="/dashboard/orders">
                View My Orders
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
