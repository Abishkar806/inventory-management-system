import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">Welcome to your admin dashboard.</p>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="bg-purple-50 border border-purple-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="sales" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            Sales
          </TabsTrigger>
          <TabsTrigger value="inventory" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            Inventory
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-green-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700">$45,231.89</div>
                <p className="text-xs text-green-600">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700">+573</div>
                <p className="text-xs text-blue-600">+201 since last week</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Inventory Items</CardTitle>
                <Package className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-700">1,324</div>
                <p className="text-xs text-orange-600">+42 new items this month</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-700">573</div>
                <p className="text-xs text-purple-600">+18 since last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 border-2 border-indigo-100 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-indigo-700">Sales Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-700 mb-2">Sales Chart</div>
                    <div className="text-sm text-muted-foreground">Sales chart visualization would go here</div>
                    <div className="mt-4 flex justify-center space-x-2">
                      <div className="h-4 w-20 bg-blue-400 rounded"></div>
                      <div className="h-4 w-16 bg-indigo-400 rounded"></div>
                      <div className="h-4 w-28 bg-purple-400 rounded"></div>
                      <div className="h-4 w-12 bg-pink-400 rounded"></div>
                      <div className="h-4 w-24 bg-cyan-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 border-2 border-cyan-100 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-cyan-700">Recent Activities</CardTitle>
                <CardDescription>Latest system activities.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-cyan-50 rounded-lg">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-cyan-700">New user registered</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-green-700">Inventory updated</p>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-blue-700">New order placed</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-purple-700">Product price updated</p>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="sales" className="space-y-4">
          <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="text-blue-700">Sales Performance</CardTitle>
              <CardDescription>Detailed sales data and trends.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-700 mb-2">Sales Performance Chart</div>
                  <div className="text-sm text-muted-foreground">Detailed sales performance chart would go here</div>
                  <div className="mt-6 grid grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-8 bg-gradient-to-t from-blue-200 to-blue-500 rounded-t-lg"></div>
                      <div className="mt-2 text-xs">Q1</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-40 w-8 bg-gradient-to-t from-indigo-200 to-indigo-500 rounded-t-lg"></div>
                      <div className="mt-2 text-xs">Q2</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-8 bg-gradient-to-t from-purple-200 to-purple-500 rounded-t-lg"></div>
                      <div className="mt-2 text-xs">Q3</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-48 w-8 bg-gradient-to-t from-pink-200 to-pink-500 rounded-t-lg"></div>
                      <div className="mt-2 text-xs">Q4</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inventory" className="space-y-4">
          <Card className="border-2 border-orange-100 hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="text-orange-700">Inventory Status</CardTitle>
              <CardDescription>Current inventory levels and alerts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <p className="font-medium text-yellow-700">Low Stock Items</p>
                    <p className="text-sm text-muted-foreground">Items that need reordering</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-yellow-700">24 items</p>
                    <Link href="/admin/products?filter=low-stock">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
                      >
                        View All
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <p className="font-medium text-red-700">Out of Stock Items</p>
                    <p className="text-sm text-muted-foreground">Items currently unavailable</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-700">8 items</p>
                    <Link href="/admin/products?filter=out-of-stock">
                      <Button size="sm" variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                        View All
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <p className="font-medium text-green-700">Excess Inventory</p>
                    <p className="text-sm text-muted-foreground">Items with high stock levels</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-700">32 items</p>
                    <Link href="/admin/products?filter=excess">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-300 text-green-700 hover:bg-green-100"
                      >
                        View All
                      </Button>
                    </Link>
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
