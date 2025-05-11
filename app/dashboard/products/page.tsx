"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Search, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

// Sample product data with furniture items only (sofas and tables)
const products = [
  {
    id: 1,
    name: "Modern L-Shaped Sectional Sofa",
    category: "Furniture",
    subCategory: "Sofas",
    price: 1299.99,
    image: "/modern-l-shaped-sectional.png",
    rating: 4.7,
    stock: 8,
    isNew: true,
    discount: 15,
    description: "Elegant L-shaped sectional sofa with premium fabric upholstery, perfect for modern living rooms.",
    material: "Fabric",
    color: "Gray",
  },
  {
    id: 2,
    name: "Leather Recliner Sofa",
    category: "Furniture",
    subCategory: "Sofas",
    price: 899.99,
    image: "/leather-recliner-sofa.png",
    rating: 4.5,
    stock: 12,
    isNew: false,
    discount: 0,
    description: "Premium leather recliner sofa with adjustable headrests and footrests for ultimate comfort.",
    material: "Leather",
    color: "Brown",
  },
  {
    id: 3,
    name: "Mid-Century Modern Sofa",
    category: "Furniture",
    subCategory: "Sofas",
    price: 749.99,
    image: "/mid-century-modern-sofa.png",
    rating: 4.3,
    stock: 5,
    isNew: false,
    discount: 10,
    description: "Stylish mid-century modern sofa with tapered wooden legs and tufted back cushions.",
    material: "Fabric",
    color: "Blue",
  },
  {
    id: 4,
    name: "Convertible Sleeper Sofa",
    category: "Furniture",
    subCategory: "Sofas",
    price: 849.99,
    image: "/convertible-sleeper-sofa.png",
    rating: 4.2,
    stock: 7,
    isNew: true,
    discount: 5,
    description: "Versatile sleeper sofa that easily converts into a comfortable bed for overnight guests.",
    material: "Fabric",
    color: "Beige",
  },
  {
    id: 5,
    name: "Velvet Chesterfield Sofa",
    category: "Furniture",
    subCategory: "Sofas",
    price: 1099.99,
    image: "/velvet-chesterfield-sofa.png",
    rating: 4.6,
    stock: 4,
    isNew: true,
    discount: 0,
    description: "Classic Chesterfield sofa with luxurious velvet upholstery and deep button tufting.",
    material: "Velvet",
    color: "Emerald Green",
  },
  {
    id: 6,
    name: "Modular Sectional Sofa",
    category: "Furniture",
    subCategory: "Sofas",
    price: 1499.99,
    image: "/modular-sectional-sofa.png",
    rating: 4.4,
    stock: 3,
    isNew: false,
    discount: 8,
    description: "Customizable modular sectional that can be arranged in multiple configurations.",
    material: "Fabric",
    color: "Light Gray",
  },
  {
    id: 7,
    name: "Marble Top Dining Table",
    category: "Furniture",
    subCategory: "Tables",
    price: 1199.99,
    image: "/marble-top-dining-table.png",
    rating: 4.8,
    stock: 3,
    isNew: true,
    discount: 0,
    description: "Elegant dining table with genuine marble top and sturdy metal base, seats up to 6 people.",
    material: "Marble & Metal",
    color: "White & Gold",
  },
  {
    id: 8,
    name: "Rustic Wooden Coffee Table",
    category: "Furniture",
    subCategory: "Tables",
    price: 349.99,
    image: "/rustic-wooden-coffee-table.png",
    rating: 4.6,
    stock: 15,
    isNew: false,
    discount: 0,
    description: "Handcrafted rustic coffee table made from reclaimed wood with unique grain patterns.",
    material: "Reclaimed Wood",
    color: "Natural Wood",
  },
  {
    id: 9,
    name: "Glass Top Console Table",
    category: "Furniture",
    subCategory: "Tables",
    price: 279.99,
    image: "/glass-top-console-table.png",
    rating: 4.4,
    stock: 9,
    isNew: false,
    discount: 12,
    description: "Modern console table with tempered glass top and polished stainless steel frame.",
    material: "Glass & Steel",
    color: "Clear & Silver",
  },
  {
    id: 10,
    name: "Extendable Dining Table",
    category: "Furniture",
    subCategory: "Tables",
    price: 899.99,
    image: "/placeholder.svg?key=6budp",
    rating: 4.5,
    stock: 6,
    isNew: true,
    discount: 8,
    description: "Versatile dining table that extends to accommodate additional guests, perfect for entertaining.",
    material: "Solid Wood",
    color: "Walnut",
  },
  {
    id: 11,
    name: "Industrial Coffee Table",
    category: "Furniture",
    subCategory: "Tables",
    price: 299.99,
    image: "/placeholder.svg?height=400&width=600&query=industrial+coffee+table+wood+metal",
    rating: 4.3,
    stock: 11,
    isNew: false,
    discount: 0,
    description: "Industrial style coffee table with metal frame and solid wood top.",
    material: "Wood & Metal",
    color: "Brown & Black",
  },
  {
    id: 12,
    name: "Round Pedestal Dining Table",
    category: "Furniture",
    subCategory: "Tables",
    price: 699.99,
    image: "/placeholder.svg?height=400&width=600&query=round+pedestal+dining+table",
    rating: 4.7,
    stock: 4,
    isNew: true,
    discount: 5,
    description: "Elegant round pedestal dining table, perfect for smaller spaces and intimate gatherings.",
    material: "Solid Wood",
    color: "White",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [subCategoryFilter, setSubCategoryFilter] = useState("all")
  const [materialFilter, setMaterialFilter] = useState("all")
  const { toast } = useToast()

  // Get unique subcategories based on selected category
  const getSubCategories = () => {
    if (categoryFilter === "all") return []

    const subCategories = products
      .filter((product) => product.category === categoryFilter)
      .map((product) => product.subCategory)

    return [...new Set(subCategories)]
  }

  // Get unique materials
  const getMaterials = () => {
    let filteredProducts = products

    if (categoryFilter !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.category === categoryFilter)
    }

    if (subCategoryFilter !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.subCategory === subCategoryFilter)
    }

    const materials = filteredProducts.map((product) => product.material)
    return [...new Set(materials)]
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesSubCategory = subCategoryFilter === "all" || product.subCategory === subCategoryFilter
    const matchesMaterial = materialFilter === "all" || product.material === materialFilter

    return matchesSearch && matchesCategory && matchesSubCategory && matchesMaterial
  })

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleAddToWishlist = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    })
  }

  // Function to render star ratings
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-3.5 w-3.5 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-3.5 w-3.5 text-gray-300" />)
    }

    return stars
  }

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))]
  const subCategories = getSubCategories()
  const materials = getMaterials()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Furniture Collection
        </h1>
        <p className="text-muted-foreground">Browse our premium selection of sofas, tables, and more.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-500" />
          <Input
            type="search"
            placeholder="Search furniture..."
            className="pl-8 border-blue-200 focus:border-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Select
            value={categoryFilter}
            onValueChange={(value) => {
              setCategoryFilter(value)
              setSubCategoryFilter("all")
              setMaterialFilter("all")
            }}
          >
            <SelectTrigger className="w-full border-blue-200 focus:border-blue-400">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {subCategories.length > 0 && (
            <Select
              value={subCategoryFilter}
              onValueChange={(value) => {
                setSubCategoryFilter(value)
                setMaterialFilter("all")
              }}
            >
              <SelectTrigger className="w-full border-blue-200 focus:border-blue-400">
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All {categoryFilter}</SelectItem>
                {subCategories.map((subCategory) => (
                  <SelectItem key={subCategory} value={subCategory}>
                    {subCategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {materials.length > 0 && (
            <Select value={materialFilter} onValueChange={setMaterialFilter}>
              <SelectTrigger className="w-full border-blue-200 focus:border-blue-400">
                <SelectValue placeholder="Material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Materials</SelectItem>
                {materials.map((material) => (
                  <SelectItem key={material} value={material}>
                    {material}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <Link href={`/dashboard/products/${product.id}`}>
              <div className="aspect-[4/3] relative bg-gray-50 overflow-hidden">
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 z-10 bg-blue-600 hover:bg-blue-700">New</Badge>
                )}
                {product.discount > 0 && (
                  <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">
                    -{product.discount}%
                  </Badge>
                )}
                <div className="relative h-full w-full">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm text-blue-600">{product.subCategory}</div>
                      <div className="flex items-center">
                        {renderRating(product.rating)}
                        <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2 h-12">{product.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {product.material}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{product.color}</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 h-10 mt-1">{product.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-end gap-1">
                      {product.discount > 0 && (
                        <span className="text-sm line-through text-gray-400">
                          ${(product.price + (product.price * product.discount) / 100).toFixed(2)}
                        </span>
                      )}
                      <span className="font-bold text-lg text-blue-700">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {product.stock > 10 ? (
                        <span className="text-green-600">In Stock</span>
                      ) : product.stock > 0 ? (
                        <span className="text-orange-500">Low Stock</span>
                      ) : (
                        <span className="text-red-500">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Link>
            <div className="px-4 pb-4 pt-0">
              <div className="flex items-center justify-between gap-2">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all"
                  onClick={(e) => handleAddToCart(product, e)}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 border-gray-200"
                  onClick={(e) => handleAddToWishlist(product, e)}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No products found</h3>
          <p className="text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}
    </div>
  )
}
