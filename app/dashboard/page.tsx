import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Package, ShoppingCart, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground">Welcome to your customer dashboard.</p>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="bg-blue-50 border border-blue-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Recent Orders
          </TabsTrigger>
          <TabsTrigger value="products" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Favorite Products
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700">12</div>
                <p className="text-xs text-green-600">+2 from last month</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                <Package className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700">3</div>
                <p className="text-xs text-red-500">-1 from last month</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-700">$1,234.56</div>
                <p className="text-xs text-green-600">+$340.25 from last month</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
                <Users className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-700">7</div>
                <p className="text-xs text-green-600">+2 from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 border-2 border-indigo-100 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-indigo-700">Recent Activity</CardTitle>
                <CardDescription>Your recent orders and product views.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Order #1234 Placed</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                    <div className="ml-auto font-medium text-green-600">$125.00</div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Viewed "Wireless Headphones"</p>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Order #1233 Delivered</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                    <div className="ml-auto font-medium text-green-600">$85.00</div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Added "Smart Watch" to Wishlist</p>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 border-2 border-cyan-100 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-cyan-700">Recommended Products</CardTitle>
                <CardDescription>Based on your purchase history.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md overflow-hidden mr-4">
                      <Image
                        src="/diverse-people-listening-headphones.png"
                        alt="Wireless Earbuds Pro"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-0 space-y-1">
                      <p className="text-sm font-medium leading-none">Wireless Earbuds Pro</p>
                      <p className="text-sm text-muted-foreground">$89.99</p>
                    </div>
                    <div className="ml-auto">
                      <Link href="/dashboard/products/1">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md overflow-hidden mr-4">
                      <Image
                        src="/audio-speaker.png"
                        alt="Smart Home Hub"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-0 space-y-1">
                      <p className="text-sm font-medium leading-none">Smart Home Hub</p>
                      <p className="text-sm text-muted-foreground">$129.99</p>
                    </div>
                    <div className="ml-auto">
                      <Link href="/dashboard/products/2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md overflow-hidden mr-4">
                      <Image
                        src="/usb-hub.png"
                        alt="4K Streaming Device"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-0 space-y-1">
                      <p className="text-sm font-medium leading-none">4K Streaming Device</p>
                      <p className="text-sm text-muted-foreground">$49.99</p>
                    </div>
                    <div className="ml-auto">
                      <Link href="/dashboard/products/3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="text-blue-700">Recent Orders</CardTitle>
              <CardDescription>Your recent orders and their status.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-700">Order #1234</p>
                    <p className="text-sm text-muted-foreground">Placed on May 8, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-blue-700">$125.00</p>
                    <p className="text-sm text-blue-500">Processing</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-700">Order #1233</p>
                    <p className="text-sm text-muted-foreground">Placed on May 5, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-700">$85.00</p>
                    <p className="text-sm text-green-500">Delivered</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-700">Order #1232</p>
                    <p className="text-sm text-muted-foreground">Placed on April 28, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-700">$210.50</p>
                    <p className="text-sm text-green-500">Delivered</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="products" className="space-y-4">
          <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="text-purple-700">Favorite Products</CardTitle>
              <CardDescription>Products you've purchased multiple times.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden mr-4">
                      <Image
                        src="/diverse-people-listening-headphones.png"
                        alt="Wireless Headphones"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">Wireless Headphones</p>
                      <p className="text-sm text-muted-foreground">Electronics</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-purple-700">$79.99</p>
                    <p className="text-sm text-purple-500">Purchased 3 times</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-cyan-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden mr-4">
                      <Image src="/usb-cable.png" alt="USB-C Cable" width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-cyan-700">USB-C Cable (3-pack)</p>
                      <p className="text-sm text-muted-foreground">Accessories</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-cyan-700">$19.99</p>
                    <p className="text-sm text-cyan-500">Purchased 2 times</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden mr-4">
                      <Image
                        src="/field-mouse.png"
                        alt="Portable Power Bank"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-orange-700">Portable Power Bank</p>
                      <p className="text-sm text-muted-foreground">Electronics</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-orange-700">$45.00</p>
                    <p className="text-sm text-orange-500">Purchased 2 times</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
