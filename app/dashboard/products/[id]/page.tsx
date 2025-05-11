"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, Star, Truck } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useParams } from "next/navigation"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

// Sample product data
const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    image: "/diverse-people-listening-headphones.png",
    rating: 4.5,
    stock: 15,
    description:
      "High-quality wireless headphones with noise cancellation technology. Experience crystal clear sound and comfort for extended listening sessions. Features include Bluetooth 5.0, 30-hour battery life, and quick charging.",
    specifications: [
      { name: "Connectivity", value: "Bluetooth 5.0" },
      { name: "Battery Life", value: "30 hours" },
      { name: "Noise Cancellation", value: "Active" },
      { name: "Weight", value: "250g" },
      { name: "Charging", value: "USB-C" },
    ],
    reviews: [
      {
        id: 1,
        user: "John D.",
        rating: 5,
        comment: "Best headphones I've ever owned. The sound quality is amazing and the battery lasts forever.",
      },
      {
        id: 2,
        user: "Sarah M.",
        rating: 4,
        comment: "Very comfortable and great sound. The noise cancellation works well in most environments.",
      },
    ],
  },
  {
    id: "2",
    name: "Smart Watch",
    category: "Electronics",
    price: 149.99,
    image: "/modern-smartwatch.png",
    rating: 4.2,
    stock: 8,
    description:
      "Feature-packed smartwatch with health monitoring, notifications, and fitness tracking. Water-resistant design with a vibrant touchscreen display. Compatible with both iOS and Android devices.",
    specifications: [
      { name: "Display", value: "1.4 inch AMOLED" },
      { name: "Battery Life", value: "Up to 7 days" },
      { name: "Water Resistance", value: "5 ATM" },
      { name: "Sensors", value: "Heart rate, SpO2, Accelerometer" },
      { name: "Connectivity", value: "Bluetooth 5.0, Wi-Fi" },
    ],
    reviews: [
      {
        id: 1,
        user: "Michael T.",
        rating: 4,
        comment: "Great watch with lots of features. Battery life is good but not as long as advertised.",
      },
      {
        id: 2,
        user: "Emily R.",
        rating: 5,
        comment: "Love this watch! The fitness tracking is accurate and the sleep monitoring has been eye-opening.",
      },
    ],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  const productId = params.id as string
  const product = products.find((p) => p.id === productId) || products[0]

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    })
  }

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: `Preparing your order for ${quantity} x ${product.name}.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative aspect-square rounded-xl overflow-hidden border-4 border-blue-100 shadow-lg">
          <ImageWithFallback
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain"
          />
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-blue-600 shadow-md">
            {product.rating} ★
          </div>
        </div>
        <div className="space-y-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-blue-700">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews.length} reviews)
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-bold text-green-600">${product.price.toFixed(2)}</div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
              <Truck className="h-5 w-5 text-green-500" />
              <span className="text-sm">
                {product.stock > 0 ? (
                  <span className="text-green-600 font-medium">In Stock ({product.stock} available)</span>
                ) : (
                  <span className="text-red-500 font-medium">Out of Stock</span>
                )}
              </span>
            </div>
            <p className="text-muted-foreground bg-white p-4 rounded-lg">{product.description}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-3 rounded-lg">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  -
                </Button>
                <div className="w-12 text-center font-bold">{quantity}</div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-8">
        <TabsList className="bg-blue-50 border border-blue-100 w-full">
          <TabsTrigger
            value="description"
            className="flex-1 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="flex-1 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="flex-1 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4">
          <Card className="border-2 border-blue-100">
            <CardContent className="pt-6">
              <p className="leading-relaxed">{product.description}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications" className="pt-4">
          <Card className="border-2 border-blue-100">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between border-b border-blue-100 pb-2">
                    <span className="font-medium text-blue-700">{spec.name}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4">
          <Card className="border-2 border-blue-100">
            <CardContent className="pt-6">
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="space-y-2 border-b border-blue-100 pb-4 last:border-0">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-blue-700">{review.user}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
