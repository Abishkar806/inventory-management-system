"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check, ChevronRight, Package, RotateCcw, Send, Truck } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

// Sample orders data with furniture items
const orders = [
  {
    id: "ORD-1233",
    date: "May 5, 2025",
    status: "Delivered",
    total: 1649.98,
    items: [
      {
        id: 1,
        name: "Leather Recliner Sofa",
        quantity: 1,
        price: 1299.99,
        image: "/leather-recliner-sofa.png",
        returnable: true,
      },
      {
        id: 2,
        name: "Rustic Coffee Table",
        quantity: 1,
        price: 349.99,
        image: "/placeholder.svg?key=wpvvl",
        returnable: true,
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
        id: 3,
        name: "Mid-Century Modern Sofa",
        quantity: 1,
        price: 899.99,
        image: "/mid-century-modern-sofa.png",
        returnable: true,
      },
      {
        id: 4,
        name: "Round Pedestal Dining Table",
        quantity: 1,
        price: 749.99,
        image: "/round-pedestal-dining-table.png",
        returnable: true,
      },
      {
        id: 5,
        name: "Decorative Throw Pillows (Set of 4)",
        quantity: 2,
        price: 299.99,
        image: "/decorative-throw-pillows.png",
        returnable: false,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Anytown, CA 12345",
      tracking: "TRK987654321",
    },
  },
]

// Sample returns data
const returns = [
  {
    id: "RET-1001",
    orderId: "ORD-1232",
    date: "May 2, 2025",
    status: "Approved",
    refundAmount: 749.99,
    items: [
      {
        id: 4,
        name: "Round Pedestal Dining Table",
        quantity: 1,
        price: 749.99,
        image: "/round-pedestal-dining-table.png",
        reason: "Damaged during shipping",
      },
    ],
    timeline: [
      {
        date: "May 2, 2025",
        status: "Return Requested",
        description: "Return request submitted",
      },
      {
        date: "May 3, 2025",
        status: "Return Approved",
        description: "Return request approved",
      },
      {
        date: "May 5, 2025",
        status: "Awaiting Package",
        description: "Waiting for the package to be returned",
      },
    ],
  },
]

export default function ReturnsPage() {
  const { toast } = useToast()
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [returnReason, setReturnReason] = useState("")
  const [additionalComments, setAdditionalComments] = useState("")
  const [selectedReturn, setSelectedReturn] = useState<string | null>(null)

  const handleItemSelect = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId))
    } else {
      setSelectedItems([...selectedItems, itemId])
    }
  }

  const handleSubmitReturn = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to return.",
        variant: "destructive",
      })
      return
    }

    if (!returnReason) {
      toast({
        title: "Return reason required",
        description: "Please select a reason for your return.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Return request submitted",
      description: "Your return request has been submitted successfully.",
    })

    // Reset form
    setSelectedOrder(null)
    setSelectedItems([])
    setReturnReason("")
    setAdditionalComments("")
  }

  const getOrderById = (orderId: string) => {
    return orders.find((order) => order.id === orderId)
  }

  const getReturnById = (returnId: string) => {
    return returns.find((returnItem) => returnItem.id === returnId)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Returns & Refunds
        </h1>
        <p className="text-muted-foreground">Manage your furniture returns and track refund status.</p>
      </div>

      <Tabs defaultValue="new-return">
        <TabsList className="bg-blue-50 border border-blue-100">
          <TabsTrigger value="new-return" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <RotateCcw className="mr-2 h-4 w-4" />
            Request a Return
          </TabsTrigger>
          <TabsTrigger
            value="return-history"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <Package className="mr-2 h-4 w-4" />
            Return History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="new-return" className="mt-4 space-y-6">
          {!selectedOrder ? (
            <div className="space-y-6">
              <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-blue-700">Select an Order to Return</CardTitle>
                  <CardDescription>Choose a furniture order from the list below to initiate a return.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {orders.length > 0 ? (
                      orders.map((order) => (
                        <Card
                          key={order.id}
                          className="border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                          onClick={() => setSelectedOrder(order.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <h3 className="font-medium text-blue-700">{order.id}</h3>
                                <p className="text-sm text-muted-foreground">Ordered on {order.date}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {order.items.slice(0, 2).map((item) => (
                                    <div
                                      key={item.id}
                                      className="flex items-center gap-2 text-sm bg-blue-50 px-2 py-1 rounded-md"
                                    >
                                      <div className="relative h-6 w-6 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                                        <img
                                          src={item.image || "/placeholder.svg"}
                                          alt={item.name}
                                          className="object-contain h-full w-full"
                                        />
                                      </div>
                                      <span className="truncate max-w-[150px]">{item.name}</span>
                                    </div>
                                  ))}
                                  {order.items.length > 2 && (
                                    <div className="text-sm bg-blue-50 px-2 py-1 rounded-md">
                                      +{order.items.length - 2} more
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge
                                  className={
                                    order.status === "Delivered"
                                      ? "bg-green-500 hover:bg-green-600"
                                      : "bg-blue-500 hover:bg-blue-600"
                                  }
                                >
                                  {order.status}
                                </Badge>
                                <span className="font-medium">${order.total.toFixed(2)}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                                >
                                  <ChevronRight className="h-5 w-5" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">No eligible orders found for return.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="bg-blue-50 border-t border-blue-100">
                  <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    <Link href="/dashboard/orders">View All Orders</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-indigo-100 hover:shadow-md transition-all">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle className="text-indigo-700">Furniture Return Policy</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-indigo-700">Return Eligibility</h3>
                      <p className="text-sm text-muted-foreground">
                        Furniture items must be returned within 30 days of delivery. They must be in their original
                        condition with all tags and packaging intact. Assembly of furniture may void return eligibility.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h3 className="font-medium text-indigo-700">Non-Returnable Items</h3>
                      <p className="text-sm text-muted-foreground">
                        Custom-made furniture, clearance items, and items marked as final sale are not eligible for
                        return. Decorative items like pillows and throws may have different return policies.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h3 className="font-medium text-indigo-700">Refund Process</h3>
                      <p className="text-sm text-muted-foreground">
                        For furniture returns, we offer free return pickup for large items. Once we receive your
                        returned items, it takes 5-7 business days to inspect them. After approval, refunds are
                        processed within 3-5 business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-blue-700">Return Items from Order {selectedOrder}</CardTitle>
                      <CardDescription>
                        Select the furniture items you want to return and provide a reason.
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                      onClick={() => setSelectedOrder(null)}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-blue-700">Select Items to Return</h3>
                    {getOrderById(selectedOrder)?.items.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 rounded-lg border ${
                          selectedItems.includes(item.id) ? "border-blue-300 bg-blue-50" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <Checkbox
                            id={`item-${item.id}`}
                            checked={selectedItems.includes(item.id)}
                            onCheckedChange={() => handleItemSelect(item.id)}
                            disabled={!item.returnable}
                          />
                          <div className="h-16 w-16 relative rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="object-contain h-full w-full"
                            />
                          </div>
                          <div className="flex-1">
                            <Label
                              htmlFor={`item-${item.id}`}
                              className={`font-medium ${!item.returnable ? "text-muted-foreground" : ""}`}
                            >
                              {item.name}
                            </Label>
                            <div className="flex items-center gap-2 text-sm">
                              <span className={!item.returnable ? "text-muted-foreground" : ""}>
                                ${item.price.toFixed(2)} • Qty: {item.quantity}
                              </span>
                              {!item.returnable && (
                                <Badge variant="outline" className="text-red-500 border-red-200">
                                  Not Returnable
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-medium text-blue-700">Return Reason</h3>
                    <Select value={returnReason} onValueChange={setReturnReason}>
                      <SelectTrigger className="border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Select a reason for return" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wrong-item">Received wrong furniture</SelectItem>
                        <SelectItem value="defective">Defective product</SelectItem>
                        <SelectItem value="damaged">Damaged during shipping</SelectItem>
                        <SelectItem value="not-as-described">Not as described</SelectItem>
                        <SelectItem value="color-mismatch">Color doesn't match website</SelectItem>
                        <SelectItem value="size-issue">Size/dimensions issue</SelectItem>
                        <SelectItem value="comfort-issue">Comfort issue</SelectItem>
                        <SelectItem value="no-longer-needed">No longer needed</SelectItem>
                        <SelectItem value="other">Other reason</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Additional Comments (Optional)</Label>
                    <Textarea
                      id="comments"
                      placeholder="Provide any additional details about your furniture return..."
                      className="min-h-[100px] border-blue-200 focus:border-blue-400"
                      value={additionalComments}
                      onChange={(e) => setAdditionalComments(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="bg-blue-50 border-t border-blue-100 flex justify-between">
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    onClick={() => setSelectedOrder(null)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    onClick={handleSubmitReturn}
                    disabled={selectedItems.length === 0 || !returnReason}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Return Request
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="return-history" className="mt-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-xl font-bold text-blue-700">Your Furniture Returns</h2>
              {returns.length > 0 ? (
                returns.map((returnItem) => (
                  <Card
                    key={returnItem.id}
                    className={`cursor-pointer hover:shadow-md transition-all ${
                      selectedReturn === returnItem.id ? "border-2 border-blue-400" : "border border-blue-100"
                    }`}
                    onClick={() => setSelectedReturn(returnItem.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{returnItem.id}</h3>
                          <p className="text-sm text-muted-foreground">
                            From order {returnItem.orderId} • {returnItem.date}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                              <img
                                src={returnItem.items[0].image || "/placeholder.svg"}
                                alt={returnItem.items[0].name}
                                className="object-contain h-full w-full"
                              />
                            </div>
                            <span className="text-sm truncate max-w-[150px]">{returnItem.items[0].name}</span>
                          </div>
                        </div>
                        <Badge
                          className={
                            returnItem.status === "Approved"
                              ? "bg-green-500 hover:bg-green-600"
                              : returnItem.status === "Pending"
                                ? "bg-orange-500 hover:bg-orange-600"
                                : "bg-blue-500 hover:bg-blue-600"
                          }
                        >
                          {returnItem.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Package className="h-12 w-12 text-blue-200 mb-4" />
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">No returns found</h2>
                    <p className="text-muted-foreground text-center mb-6">You haven't made any return requests yet.</p>
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                      onClick={() => document.getElementById("new-return-tab")?.click()}
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Request a Return
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="md:col-span-2">
              {selectedReturn ? (
                <Card className="border-2 border-blue-100">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-blue-700">Return Details: {selectedReturn}</CardTitle>
                        <CardDescription>
                          From order {getReturnById(selectedReturn)?.orderId} • {getReturnById(selectedReturn)?.date}
                        </CardDescription>
                      </div>
                      <Badge
                        className={
                          getReturnById(selectedReturn)?.status === "Approved"
                            ? "bg-green-500 hover:bg-green-600"
                            : getReturnById(selectedReturn)?.status === "Pending"
                              ? "bg-orange-500 hover:bg-orange-600"
                              : "bg-blue-500 hover:bg-blue-600"
                        }
                      >
                        {getReturnById(selectedReturn)?.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-blue-700">Returned Items</h3>
                      {getReturnById(selectedReturn)?.items.map((item) => (
                        <div key={item.id} className="p-4 rounded-lg border border-blue-100 bg-blue-50">
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 relative rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="object-contain h-full w-full"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <div className="flex items-center gap-2 text-sm">
                                <span>
                                  ${item.price.toFixed(2)} • Qty: {item.quantity}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Reason: {item.reason}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium text-blue-700">Refund Information</h3>
                      <div className="p-4 rounded-lg border border-green-100 bg-green-50">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Refund Amount</span>
                          <span className="font-bold text-green-600">
                            ${getReturnById(selectedReturn)?.refundAmount.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Refunds typically take 5-10 business days to appear in your account after approval, depending
                          on your payment method.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium text-blue-700">Return Timeline</h3>
                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                        <div className="space-y-8">
                          {getReturnById(selectedReturn)?.timeline.map((event, index) => (
                            <div key={index} className="relative pl-10">
                              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                {index === 0 ? (
                                  <RotateCcw className="h-5 w-5" />
                                ) : index === 1 ? (
                                  <Check className="h-5 w-5" />
                                ) : (
                                  <Truck className="h-5 w-5" />
                                )}
                              </div>
                              <div className="font-medium text-blue-700">{event.status}</div>
                              <div className="text-sm text-muted-foreground">
                                {event.date} - {event.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <RotateCcw className="h-12 w-12 text-blue-200 mb-4" />
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Select a return to view details</h2>
                    <p className="text-muted-foreground text-center">
                      Click on a return from the list to view its details and status.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
