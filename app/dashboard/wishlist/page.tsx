"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Search, ShoppingCart, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"

// Sample wishlist data with furniture items
const wishlistItems = [
  {
    id: 1,
    name: "Velvet Chesterfield Sofa",
    category: "Sofas",
    price: 1499.99,
    image: "/velvet-chesterfield-sofa.png",
    inStock: true,
    color: "Navy Blue",
    material: "Velvet",
  },
  {
    id: 2,
    name: "Mid-Century Modern Sofa",
    category: "Sofas",
    price: 899.99,
    image: "/mid-century-modern-sofa.png",
    inStock: true,
    color: "Teal",
    material: "Fabric",
  },
  {
    id: 3,
    name: "Glass Console Table",
    category: "Tables",
    price: 399.99,
    image: "/glass-console-table.png",
    inStock: true,
    color: "Clear/Gold",
    material: "Glass & Metal",
  },
  {
    id: 4,
    name: "Round Pedestal Dining Table",
    category: "Tables",
    price: 749.99,
    image: "/round-pedestal-dining-table.png",
    inStock: false,
    color: "White",
    material: "Wood",
  },
]

export default function WishlistPage() {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [items, setItems] = useState(wishlistItems)

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const handleRemoveFromWishlist = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
    toast({
      title: "Item removed",
      description: "Item has been removed from your wishlist.",
    })
  }

  const handleAddToCart = (item: any) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          My Wishlist
        </h1>
        <p className="text-muted-foreground">Furniture items you've saved for later.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-pink-500" />
          <Input
            type="search"
            placeholder="Search wishlist..."
            className="pl-8 border-pink-200 focus:border-pink-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px] border-pink-200 focus:border-pink-400">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Sofas">Sofas</SelectItem>
            <SelectItem value="Tables">Tables</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-2 border-pink-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Link href={`/dashboard/products/${item.id}`}>
                <div className="aspect-square relative bg-gray-50 p-4">
                  <div className="h-full w-full flex items-center justify-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
                  </div>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
              </Link>
              <CardContent className="p-4 bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-pink-700">{item.name}</div>
                    <div className="text-sm text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">{item.color}</span>
                    <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                      {item.material}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-pink-600">${item.price.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.inStock ? (
                        <span className="text-green-600">In stock</span>
                      ) : (
                        <span className="text-red-500">Out of stock</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      disabled={!item.inStock}
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="ml-2 text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-2 border-pink-100">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="relative h-32 w-32 mb-4">
              <Image src="/empty-wishlist.png" alt="Empty Wishlist" fill className="object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-pink-700 mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground text-center mb-6">
              Browse our furniture collection and add items to your wishlist to save them for later.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              <Link href="/dashboard/products">Browse Furniture</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
