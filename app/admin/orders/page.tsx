"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"

// Sample order data with furniture items
const orders = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    email: "john.doe@example.com",
    date: "2025-05-08T10:30:00",
    status: "Processing",
    total: 2549.97,
    items: [
      {
        id: 1,
        name: "Modern L-Shaped Sectional Sofa",
        quantity: 1,
        price: 1299.99,
        image: "/modern-l-shaped-sectional.png",
        category: "Sofas",
      },
      {
        id: 2,
        name: "Marble Top Dining Table",
        quantity: 1,
        price: 899.99,
        image: "/marble-top-dining-table.png",
        category: "Tables",
      },
      {
        id: 3,
        name: "Glass Console Table",
        quantity: 1,
        price: 349.99,
        image: "/glass-console-table.png",
        category: "Tables",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Anytown, CA 12345",
      tracking: null,
    },
    payment: {
      method: "Credit Card",
      cardLast4: "4242",
    },
  },
  {
    id: "ORD-1233",
    customer: "Jane Smith",
    email: "jane.smith@example.com",
    date: "2025-05-05T14:45:00",
    status: "Shipped",
    total: 1649.98,
    items: [
      {
        id: 4,
        name: "Leather Recliner Sofa",
        quantity: 1,
        price: 1299.99,
        image: "/leather-recliner-sofa.png",
        category: "Sofas",
      },
      {
        id: 5,
        name: "Rustic Coffee Table",
        quantity: 1,
        price: 349.99,
        image: "/rustic-wooden-coffee-table.png",
        category: "Tables",
      },
    ],
    shipping: {
      method: "Express Shipping",
      address: "456 Oak St, Somewhere, NY 54321",
      tracking: "TRK123456789",
    },
    payment: {
      method: "PayPal",
      email: "jane.smith@example.com",
    },
  },
  {
    id: "ORD-1232",
    customer: "Robert Johnson",
    email: "robert.johnson@example.com",
    date: "2025-04-28T09:15:00",
    status: "Delivered",
    total: 2249.97,
    items: [
      {
        id: 6,
        name: "Mid-Century Modern Sofa",
        quantity: 1,
        price: 899.99,
        image: "/mid-century-modern-sofa.png",
        category: "Sofas",
      },
      {
        id: 7,
        name: "Round Pedestal Dining Table",
        quantity: 1,
        price: 749.99,
        image: "/round-pedestal-dining-table.png",
        category: "Tables",
      },
      {
        id: 8,
        name: "Velvet Accent Chair",
        quantity: 2,
        price: 299.99,
        image: "/velvet-accent-chair.png",
        category: "Chairs",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "789 Pine St, Elsewhere, TX 67890",
      tracking: "TRK987654321",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "1234",
    },
  },
  {
    id: "ORD-1231",
    customer: "Emily Davis",
    email: "emily.davis@example.com",
    date: "2025-05-07T16:20:00",
    status: "Processing",
    total: 1949.98,
    items: [
      {
        id: 9,
        name: "Velvet Chesterfield Sofa",
        quantity: 1,
        price: 1599.99,
        image: "/velvet-chesterfield-sofa.png",
        category: "Sofas",
      },
      {
        id: 10,
        name: "Glass Coffee Table",
        quantity: 1,
        price: 349.99,
        image: "/glass-coffee-table.png",
        category: "Tables",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "321 Elm St, Nowhere, FL 13579",
      tracking: null,
    },
    payment: {
      method: "Credit Card",
      cardLast4: "5678",
    },
  },
  {
    id: "ORD-1230",
    customer: "Michael Wilson",
    email: "michael.wilson@example.com",
    date: "2025-05-06T11:10:00",
    status: "Cancelled",
    total: 1299.99,
    items: [
      {
        id: 11,
        name: "Leather Sectional Sofa",
        quantity: 1,
        price: 1299.99,
        image: "/leather-sectional-sofa.png",
        category: "Sofas",
      },
    ],
    shipping: {
      method: "Express Shipping",
      address: "654 Maple St, Anywhere, WA 97531",
      tracking: null,
    },
    payment: {
      method: "Credit Card",
      cardLast4: "9012",
    },
  },
]

export default function AdminOrdersPage() {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order)
    setIsOrderDetailsOpen(true)
  }

  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    toast({
      title: "Order status updated",
      description: `Order ${orderId} has been updated to ${newStatus}.`,
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "MMM d, yyyy h:mm a")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          Furniture Order Management
        </h1>
        <p className="text-muted-foreground">View and manage customer furniture orders.</p>
      </div>

      <Tabs defaultValue="all-orders">
        <TabsList className="bg-orange-50 border border-orange-100">
          <TabsTrigger value="all-orders" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
            All Orders
          </TabsTrigger>
          <TabsTrigger value="processing" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
            Processing
          </TabsTrigger>
          <TabsTrigger value="shipped" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
            Shipped
          </TabsTrigger>
          <TabsTrigger value="delivered" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
            Delivered
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
            Cancelled
          </TabsTrigger>
        </TabsList>

        <div className="flex flex-col gap-4 sm:flex-row mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-orange-500" />
            <Input
              type="search"
              placeholder="Search orders by ID, customer name, or email..."
              className="pl-8 border-orange-200 focus:border-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </Tabs>
    </div>
  )
}
