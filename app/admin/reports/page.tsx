"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Printer, RefreshCw } from "lucide-react"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function ReportsPage() {
  const { toast } = useToast()
  const [reportType, setReportType] = useState("sales")
  const [dateRange, setDateRange] = useState({
    from: new Date(2025, 4, 1),
    to: new Date(2025, 4, 11),
  })

  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: `Your ${reportType} report has been generated successfully.`,
    })
  }

  const handleDownloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: `Your ${reportType} report has been downloaded as PDF.`,
    })
  }

  const handlePrintReport = () => {
    toast({
      title: "Printing Report",
      description: `Your ${reportType} report is being sent to the printer.`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Reports
        </h1>
        <p className="text-muted-foreground">Generate and view reports for your inventory management system.</p>
      </div>

      <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-purple-700">Generate Report</CardTitle>
          <CardDescription>Select the type of report and date range to generate.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-700">Report Type</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Report</SelectItem>
                  <SelectItem value="inventory">Inventory Report</SelectItem>
                  <SelectItem value="purchase">Purchase Report</SelectItem>
                  <SelectItem value="payment">Payment Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-purple-700">Date Range</label>
              <DatePickerWithRange date={dateRange} setDate={setDateRange} />
            </div>
            <div className="flex items-end">
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                onClick={handleGenerateReport}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="sales">
        <TabsList className="bg-purple-50 border border-purple-100">
          <TabsTrigger value="sales" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            Sales Report
          </TabsTrigger>
          <TabsTrigger value="inventory" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            Inventory Report
          </TabsTrigger>
          <TabsTrigger value="purchase" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            Purchase Report
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            Payment Report
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="space-y-4">
          <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
              <div>
                <CardTitle className="text-blue-700">Sales Report</CardTitle>
                <CardDescription>May 1, 2025 - May 11, 2025</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrintReport}
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Printer className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleDownloadReport}
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2 border-2 border-blue-100 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="text-sm text-blue-700 font-medium">Total Sales</div>
                    <div className="text-2xl font-bold text-blue-700">$45,231.89</div>
                    <div className="text-xs text-green-600 font-medium">+20.1% from previous period</div>
                  </div>
                  <div className="space-y-2 border-2 border-green-100 rounded-lg p-4 bg-gradient-to-r from-green-50 to-teal-50">
                    <div className="text-sm text-green-700 font-medium">Orders</div>
                    <div className="text-2xl font-bold text-green-700">573</div>
                    <div className="text-xs text-green-600 font-medium">+12.5% from previous period</div>
                  </div>
                  <div className="space-y-2 border-2 border-purple-100 rounded-lg p-4 bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="text-sm text-purple-700 font-medium">Average Order Value</div>
                    <div className="text-2xl font-bold text-purple-700">$78.94</div>
                    <div className="text-xs text-green-600 font-medium">+5.2% from previous period</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-blue-700">Sales by Category</h3>
                    <Button variant="ghost" size="sm" className="text-blue-700 hover:bg-blue-50">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <div className="h-[300px] w-full border-2 border-blue-100 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-700 mb-4">Sales by Category</div>
                      <div className="flex justify-center space-x-4">
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            45%
                          </div>
                          <div className="mt-2 text-sm font-medium">Electronics</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                            30%
                          </div>
                          <div className="mt-2 text-sm font-medium">Accessories</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                            15%
                          </div>
                          <div className="mt-2 text-sm font-medium">Wearables</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                            10%
                          </div>
                          <div className="mt-2 text-sm font-medium">Other</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-blue-700">Top Selling Products</h3>
                    <Button variant="ghost" size="sm" className="text-blue-700 hover:bg-blue-50">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <div className="border-2 border-blue-100 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 gap-4 p-4 font-medium border-b bg-blue-50 text-blue-700">
                      <div>Product</div>
                      <div className="text-right">Units Sold</div>
                      <div className="text-right">Revenue</div>
                    </div>
                    <div className="divide-y divide-blue-100">
                      <div className="grid grid-cols-3 gap-4 p-4 hover:bg-blue-50">
                        <div className="font-medium text-blue-700">Wireless Headphones</div>
                        <div className="text-right">245</div>
                        <div className="text-right text-green-600 font-medium">$19,595.55</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 hover:bg-blue-50">
                        <div className="font-medium text-blue-700">Smart Watch</div>
                        <div className="text-right">189</div>
                        <div className="text-right text-green-600 font-medium">$28,343.11</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 hover:bg-blue-50">
                        <div className="font-medium text-blue-700">Bluetooth Speaker</div>
                        <div className="text-right">152</div>
                        <div className="text-right text-green-600 font-medium">$9,118.48</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 hover:bg-blue-50">
                        <div className="font-medium text-blue-700">Wireless Mouse</div>
                        <div className="text-right">134</div>
                        <div className="text-right text-green-600 font-medium">$4,018.66</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 hover:bg-blue-50">
                        <div className="font-medium text-blue-700">USB-C Hub</div>
                        <div className="text-right">98</div>
                        <div className="text-right text-green-600 font-medium">$3,919.02</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inventory" className="space-y-4">
          <Card className="border-2 border-green-100 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-green-50 to-teal-50 rounded-t-lg">
              <div>
                <CardTitle className="text-green-700">Inventory Report</CardTitle>
                <CardDescription>May 1, 2025 - May 11, 2025</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrintReport}
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  <Printer className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleDownloadReport}
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2 border-2 border-green-100 rounded-lg p-4 bg-gradient-to-r from-green-50 to-teal-50">
                    <div className="text-sm text-green-700 font-medium">Total Items</div>
                    <div className="text-2xl font-bold text-green-700">1,324</div>
                    <div className="text-xs text-green-600 font-medium">+42 from previous period</div>
                  </div>
                  <div className="space-y-2 border-2 border-yellow-100 rounded-lg p-4 bg-gradient-to-r from-yellow-50 to-amber-50">
                    <div className="text-sm text-yellow-700 font-medium">Low Stock Items</div>
                    <div className="text-2xl font-bold text-yellow-700">24</div>
                    <div className="text-xs text-red-500 font-medium">+8 from previous period</div>
                  </div>
                  <div className="space-y-2 border-2 border-red-100 rounded-lg p-4 bg-gradient-to-r from-red-50 to-rose-50">
                    <div className="text-sm text-red-700 font-medium">Out of Stock Items</div>
                    <div className="text-2xl font-bold text-red-700">8</div>
                    <div className="text-xs text-red-500 font-medium">+3 from previous period</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-green-700">Inventory by Category</h3>
                    <Button variant="ghost" size="sm" className="text-green-700 hover:bg-green-50">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <div className="h-[300px] w-full border-2 border-green-100 rounded-lg p-4 bg-gradient-to-r from-green-50 to-teal-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-700 mb-4">Inventory by Category</div>
                      <div className="grid grid-cols-4 gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-full h-4 bg-green-200 rounded-t-lg"></div>
                          <div className="w-full h-32 bg-green-400 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                              520
                            </div>
                          </div>
                          <div className="mt-2 text-sm font-medium">Electronics</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full h-4 bg-teal-200 rounded-t-lg"></div>
                          <div className="w-full h-24 bg-teal-400 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                              380
                            </div>
                          </div>
                          <div className="mt-2 text-sm font-medium">Accessories</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full h-4 bg-cyan-200 rounded-t-lg"></div>
                          <div className="w-full h-20 bg-cyan-400 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                              290
                            </div>
                          </div>
                          <div className="mt-2 text-sm font-medium">Wearables</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full h-4 bg-blue-200 rounded-t-lg"></div>
                          <div className="w-full h-16 bg-blue-400 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                              134
                            </div>
                          </div>
                          <div className="mt-2 text-sm font-medium">Other</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-green-700">Low Stock Items</h3>
                    <Button variant="ghost" size="sm" className="text-green-700 hover:bg-green-50">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <div className="border-2 border-green-100 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b bg-green-50 text-green-700">
                      <div>Product</div>
                      <div className="text-right">Current Stock</div>
                      <div className="text-right">Reorder Level</div>
                      <div className="text-right">Status</div>
                    </div>
                    <div className="divide-y divide-green-100">
                      <div className="grid grid-cols-4 gap-4 p-4 hover:bg-green-50">
                        <div className="font-medium text-green-700">Smart Watch</div>
                        <div className="text-right">8</div>
                        <div className="text-right">10</div>
                        <div className="text-right text-yellow-500 font-medium">Low Stock</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 hover:bg-green-50">
                        <div className="font-medium text-green-700">USB-C Hub</div>
                        <div className="text-right">12</div>
                        <div className="text-right">15</div>
                        <div className="text-right text-yellow-500 font-medium">Low Stock</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 hover:bg-green-50">
                        <div className="font-medium text-green-700">Wireless Earbuds</div>
                        <div className="text-right">5</div>
                        <div className="text-right">10</div>
                        <div className="text-right text-yellow-500 font-medium">Low Stock</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 hover:bg-green-50">
                        <div className="font-medium text-green-700">4K Streaming Device</div>
                        <div className="text-right">0</div>
                        <div className="text-right">10</div>
                        <div className="text-right text-red-500 font-medium">Out of Stock</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 hover:bg-green-50">
                        <div className="font-medium text-green-700">Smart Home Hub</div>
                        <div className="text-right">3</div>
                        <div className="text-right">8</div>
                        <div className="text-right text-yellow-500 font-medium">Low Stock</div>
                      </div>
                    </div>
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
