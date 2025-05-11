import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Package, ShoppingBag, Truck } from "lucide-react"
import Image from "next/image"

// Sample order data with furniture items
const orders = [
  {
    id: "ORD-1234",
    date: "May 8, 2025",
    status: "Processing",
    total: 2549.97,
    items: [
      {
        id: 1,
        name: "Modern L-Shaped Sectional Sofa",
        quantity: 1,
        price: 1299.99,
        image: "/modern-l-shaped-sectional.png",
      },
      {
        id: 2,
        name: "Marble Top Dining Table",
        quantity: 1,
        price: 899.99,
        image: "/marble-top-dining-table.png",
      },
      {
        id: 3,
        name: "Glass Console Table",
        quantity: 1,
        price: 349.99,
        image: "/glass-console-table.png",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Anytown, CA 12345",
      tracking: null,
    },
  },
  {
    id: "ORD-1233",
    date: "May 5, 2025",
    status: "Shipped",
    total: 1649.98,
    items: [
      {
        id: 4,
        name: "Leather Recliner Sofa",
        quantity: 1,
        price: 1299.99,
        image: "/leather-recliner-sofa.png",
      },
      {
        id: 5,
        name: "Rustic Coffee Table",
        quantity: 1,
        price: 349.99,
        image: "/placeholder.svg?key=mvoll",
      },
    ],
    shipping: {
      method: "Express Shipping",
      address: "123 Main St, Anytown, CA 12345",
      tracking: "TRK123456789",
    },
  },
  {
    id: "ORD-1232",
    date: "April 28, 2025",
    status: "Delivered",
    total: 2249.97,
    items: [
      {
        id: 6,
        name: "Mid-Century Modern Sofa",
        quantity: 1,
        price: 899.99,
        image: "/mid-century-modern-sofa.png",
      },
      {
        id: 7,
        name: "Round Pedestal Dining Table",
        quantity: 1,
        price: 749.99,
        image: "/round-pedestal-dining-table.png",
      },
      {
        id: 8,
        name: "Velvet Accent Chair",
        quantity: 2,
        price: 299.99,
        image: "/velvet-accent-chair.png",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Anytown, CA 12345",
      tracking: "TRK987654321",
    },
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          My Orders
        </h1>
        <p className="text-muted-foreground">View and track your furniture orders.</p>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="bg-blue-50 border border-blue-100">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            All Orders
          </TabsTrigger>
          <TabsTrigger value="processing" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Processing
          </TabsTrigger>
          <TabsTrigger value="shipped" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Shipped
          </TabsTrigger>
          <TabsTrigger value="delivered" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Delivered
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {orders.map((order) => (
            <Card
              key={order.id}
              className={`border-2 ${
                order.status === "Processing"
                  ? "border-blue-100"
                  : order.status === "Shipped"
                    ? "border-orange-100"
                    : "border-green-100"
              } hover:shadow-md transition-all`}
            >
              <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-blue-700">{order.id}</CardTitle>
                    <CardDescription>Placed on {order.date}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">${order.total.toFixed(2)}</div>
                    <div className="flex items-center text-sm">
                      {order.status === "Processing" && <Package className="mr-1 h-4 w-4 text-blue-500" />}
                      {order.status === "Shipped" && <Truck className="mr-1 h-4 w-4 text-orange-500" />}
                      {order.status === "Delivered" && <ShoppingBag className="mr-1 h-4 w-4 text-green-500" />}
                      <span
                        className={
                          order.status === "Processing"
                            ? "text-blue-500 font-medium"
                            : order.status === "Shipped"
                              ? "text-orange-500 font-medium"
                              : "text-green-500 font-medium"
                        }
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-medium text-blue-700 mb-2">Items</h3>
                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between text-sm p-2 bg-blue-50 rounded-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={60}
                                height={60}
                                className="object-contain"
                              />
                            </div>
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                          </div>
                          <span className="font-medium">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-medium text-blue-700 mb-2">Shipping</h3>
                    <div className="text-sm space-y-1">
                      <div className="font-medium">{order.shipping.method}</div>
                      <div className="text-muted-foreground">{order.shipping.address}</div>
                      {order.shipping.tracking && (
                        <div className="bg-blue-50 p-2 rounded-md mt-2">
                          Tracking: <span className="font-medium text-blue-700">{order.shipping.tracking}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2 border-blue-200 text-blue-700 hover:bg-blue-50">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    {order.status === "Delivered" && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                      >
                        Buy Again
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="processing" className="space-y-4">
          {orders
            .filter((order) => order.status === "Processing")
            .map((order) => (
              <Card key={order.id} className="border-2 border-blue-100 hover:shadow-md transition-all">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-blue-700">{order.id}</CardTitle>
                      <CardDescription>Placed on {order.date}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">${order.total.toFixed(2)}</div>
                      <div className="flex items-center text-sm">
                        <Package className="mr-1 h-4 w-4 text-blue-500" />
                        <span className="text-blue-500 font-medium">Processing</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-medium text-blue-700 mb-2">Items</h3>
                      <div className="space-y-2">
                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between text-sm p-2 bg-blue-50 rounded-md"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  width={60}
                                  height={60}
                                  className="object-contain"
                                />
                              </div>
                              <span>
                                {item.quantity}x {item.name}
                              </span>
                            </div>
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-medium text-blue-700 mb-2">Shipping</h3>
                      <div className="text-sm space-y-1">
                        <div className="font-medium">{order.shipping.method}</div>
                        <div className="text-muted-foreground">{order.shipping.address}</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="shipped" className="space-y-4">
          {orders
            .filter((order) => order.status === "Shipped")
            .map((order) => (
              <Card key={order.id} className="border-2 border-orange-100 hover:shadow-md transition-all">
                <CardHeader className="pb-2 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-t-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-orange-700">{order.id}</CardTitle>
                      <CardDescription>Placed on {order.date}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">${order.total.toFixed(2)}</div>
                      <div className="flex items-center text-sm">
                        <Truck className="mr-1 h-4 w-4 text-orange-500" />
                        <span className="text-orange-500 font-medium">Shipped</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-medium text-orange-700 mb-2">Items</h3>
                      <div className="space-y-2">
                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between text-sm p-2 bg-orange-50 rounded-md"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  width={60}
                                  height={60}
                                  className="object-contain"
                                />
                              </div>
                              <span>
                                {item.quantity}x {item.name}
                              </span>
                            </div>
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-medium text-orange-700 mb-2">Shipping</h3>
                      <div className="text-sm space-y-1">
                        <div className="font-medium">{order.shipping.method}</div>
                        <div className="text-muted-foreground">{order.shipping.address}</div>
                        {order.shipping.tracking && (
                          <div className="bg-orange-50 p-2 rounded-md mt-2">
                            Tracking: <span className="font-medium text-orange-700">{order.shipping.tracking}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-200 text-orange-700 hover:bg-orange-50"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="delivered" className="space-y-4">
          {orders
            .filter((order) => order.status === "Delivered")
            .map((order) => (
              <Card key={order.id} className="border-2 border-green-100 hover:shadow-md transition-all">
                <CardHeader className="pb-2 bg-gradient-to-r from-green-50 to-teal-50 rounded-t-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-green-700">{order.id}</CardTitle>
                      <CardDescription>Placed on {order.date}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">${order.total.toFixed(2)}</div>
                      <div className="flex items-center text-sm">
                        <ShoppingBag className="mr-1 h-4 w-4 text-green-500" />
                        <span className="text-green-500 font-medium">Delivered</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-medium text-green-700 mb-2">Items</h3>
                      <div className="space-y-2">
                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between text-sm p-2 bg-green-50 rounded-md"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  width={60}
                                  height={60}
                                  className="object-contain"
                                />
                              </div>
                              <span>
                                {item.quantity}x {item.name}
                              </span>
                            </div>
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-medium text-green-700 mb-2">Shipping</h3>
                      <div className="text-sm space-y-1">
                        <div className="font-medium">{order.shipping.method}</div>
                        <div className="text-muted-foreground">{order.shipping.address}</div>
                        {order.shipping.tracking && (
                          <div className="bg-green-50 p-2 rounded-md mt-2">
                            Tracking: <span className="font-medium text-green-700">{order.shipping.tracking}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="mr-2 border-green-200 text-green-700 hover:bg-green-50"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                      >
                        Buy Again
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
