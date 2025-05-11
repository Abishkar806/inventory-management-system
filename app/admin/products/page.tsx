"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Eye, Filter, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"

// Sample furniture product data
const products = [
  {
    id: 1,
    name: "Modern L-Shaped Sectional Sofa",
    category: "Sofas",
    subcategory: "Sectional",
    price: 1299.99,
    stock: 15,
    status: "In Stock",
    image: "/modern-l-shaped-sectional.png",
    material: "Fabric",
    color: "Gray",
    dimensions: '104" W x 84" D x 34" H',
    description: "Contemporary L-shaped sectional with chaise lounge, perfect for modern living rooms.",
  },
  {
    id: 2,
    name: "Leather Recliner Sofa",
    category: "Sofas",
    subcategory: "Recliner",
    price: 1499.99,
    stock: 8,
    status: "Low Stock",
    image: "/leather-recliner-sofa.png",
    material: "Leather",
    color: "Brown",
    dimensions: '84" W x 38" D x 40" H',
    description: "Premium leather recliner sofa with power adjustable headrests and footrests.",
  },
  {
    id: 3,
    name: "Mid-Century Modern Sofa",
    category: "Sofas",
    subcategory: "Standard",
    price: 899.99,
    stock: 20,
    status: "In Stock",
    image: "/mid-century-modern-sofa.png",
    material: "Fabric",
    color: "Teal",
    dimensions: '76" W x 35" D x 32" H',
    description: "Classic mid-century design with tapered wooden legs and tufted back cushions.",
  },
  {
    id: 4,
    name: "Velvet Chesterfield Sofa",
    category: "Sofas",
    subcategory: "Chesterfield",
    price: 1599.99,
    stock: 12,
    status: "In Stock",
    image: "/velvet-chesterfield-sofa.png",
    material: "Velvet",
    color: "Navy Blue",
    dimensions: '86" W x 36" D x 30" H',
    description: "Elegant velvet Chesterfield with deep button tufting and rolled arms.",
  },
  {
    id: 5,
    name: "Marble Top Dining Table",
    category: "Tables",
    subcategory: "Dining",
    price: 899.99,
    stock: 10,
    status: "In Stock",
    image: "/marble-top-dining-table.png",
    material: "Marble & Metal",
    color: "White/Black",
    dimensions: '72" L x 36" W x 30" H',
    description: "Elegant dining table with genuine marble top and sturdy metal base.",
  },
  {
    id: 6,
    name: "Rustic Wooden Coffee Table",
    category: "Tables",
    subcategory: "Coffee",
    price: 349.99,
    stock: 5,
    status: "Low Stock",
    image: "/rustic-wooden-coffee-table.png",
    material: "Solid Wood",
    color: "Brown",
    dimensions: '48" L x 24" W x 18" H',
    description: "Handcrafted solid wood coffee table with natural grain patterns and metal accents.",
  },
  {
    id: 7,
    name: "Glass Console Table",
    category: "Tables",
    subcategory: "Console",
    price: 399.99,
    stock: 0,
    status: "Out of Stock",
    image: "/glass-console-table.png",
    material: "Glass & Metal",
    color: "Clear/Gold",
    dimensions: '48" L x 16" W x 30" H',
    description: "Modern console table with tempered glass top and gold-finished metal frame.",
  },
  {
    id: 8,
    name: "Round Pedestal Dining Table",
    category: "Tables",
    subcategory: "Dining",
    price: 749.99,
    stock: 7,
    status: "Low Stock",
    image: "/round-pedestal-dining-table.png",
    material: "Wood",
    color: "White",
    dimensions: '48" Diameter x 30" H',
    description: "Classic round pedestal dining table, perfect for smaller spaces and intimate gatherings.",
  },
]

export default function AdminProductsPage() {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [subcategoryFilter, setSubcategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Sofas",
    subcategory: "Standard",
    price: "",
    stock: "",
    material: "",
    color: "",
    dimensions: "",
    description: "",
  })

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesSubcategory = subcategoryFilter === "all" || product.subcategory === subcategoryFilter
    const matchesStatus = statusFilter === "all" || product.status === statusFilter
    return matchesSearch && matchesCategory && matchesSubcategory && matchesStatus
  })

  const handleAddProduct = () => {
    toast({
      title: "Furniture item added successfully",
      description: `${newProduct.name} has been added to the inventory.`,
    })
    setIsAddProductOpen(false)
    setNewProduct({
      name: "",
      category: "Sofas",
      subcategory: "Standard",
      price: "",
      stock: "",
      material: "",
      color: "",
      dimensions: "",
      description: "",
    })
  }

  const handleEditProduct = () => {
    toast({
      title: "Furniture item updated",
      description: `${selectedProduct.name} has been updated successfully.`,
    })
    setIsEditProductOpen(false)
    setSelectedProduct(null)
  }

  const handleDeleteProduct = (productId: number) => {
    toast({
      title: "Furniture item deleted",
      description: "The item has been removed from inventory.",
    })
  }

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product)
  }

  const handleEditClick = (product: any) => {
    setSelectedProduct({ ...product })
    setIsEditProductOpen(true)
  }

  const getSubcategories = () => {
    if (categoryFilter === "Sofas") {
      return ["Standard", "Sectional", "Recliner", "Sleeper", "Chesterfield"]
    } else if (categoryFilter === "Tables") {
      return ["Dining", "Coffee", "Console", "End", "Accent"]
    }
    return []
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Furniture Inventory Management
          </h1>
          <p className="text-muted-foreground">Manage your furniture inventory, categories, and pricing.</p>
        </div>
        <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Furniture Item
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-blue-700">Add New Furniture Item</DialogTitle>
              <DialogDescription>Add a new furniture item to your inventory.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="col-span-3 border-blue-200 focus:border-blue-400"
                  placeholder="Modern L-Shaped Sectional Sofa"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select
                  value={newProduct.category}
                  onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                >
                  <SelectTrigger id="category" className="col-span-3 border-blue-200 focus:border-blue-400">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sofas">Sofas</SelectItem>
                    <SelectItem value="Tables">Tables</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subcategory" className="text-right">
                  Subcategory
                </Label>
                <Select
                  value={newProduct.subcategory}
                  onValueChange={(value) => setNewProduct({ ...newProduct, subcategory: value })}
                >
                  <SelectTrigger id="subcategory" className="col-span-3 border-blue-200 focus:border-blue-400">
                    <SelectValue placeholder="Select subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {newProduct.category === "Sofas" ? (
                      <>
                        <SelectItem value="Standard">Standard</SelectItem>
                        <SelectItem value="Sectional">Sectional</SelectItem>
                        <SelectItem value="Recliner">Recliner</SelectItem>
                        <SelectItem value="Sleeper">Sleeper</SelectItem>
                        <SelectItem value="Chesterfield">Chesterfield</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="Dining">Dining</SelectItem>
                        <SelectItem value="Coffee">Coffee</SelectItem>
                        <SelectItem value="Console">Console</SelectItem>
                        <SelectItem value="End">End</SelectItem>
                        <SelectItem value="Accent">Accent</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price ($)
                </Label>
                <Input
                  id="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  className="col-span-3 border-blue-200 focus:border-blue-400"
                  placeholder="899.99"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stock" className="text-right">
                  Stock
                </Label>
                <Input
                  id="stock"
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  className="col-span-3 border-blue-200 focus:border-blue-400"
                  placeholder="10"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="material" className="text-right">
                  Material
                </Label>
                <Input
                  id="material"
                  value={newProduct.material}
                  onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
                  className="col-span-3 border-blue-200 focus:border-blue-400"
                  placeholder="Fabric, Leather, Wood, etc."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="color" className="text-right">
                  Color
                </Label>
                <Input
                  id="color"
                  value={newProduct.color}
                  onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
                  className="col-span-3 border-blue-200 focus:border-blue-400"
                  placeholder="Gray, Brown, White, etc."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dimensions" className="text-right">
                  Dimensions
                </Label>
                <Input
                  id="dimensions"
                  value={newProduct.dimensions}
                  onChange={(e) => setNewProduct({ ...newProduct, dimensions: e.target.value })}
                  className="col-span-3 border-blue-200 focus:border-blue-400"
                  placeholder='72" L x 36" W x 30" H'
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="col-span-3 border-blue-200 focus:border-blue-400 min-h-[100px]"
                  placeholder="Elegant dining table with genuine marble top and sturdy metal base."
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={handleAddProduct}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                Add Furniture Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditProductOpen} onOpenChange={setIsEditProductOpen}>
          <DialogContent className="sm:max-w-[600px]">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-blue-700">Edit Furniture Item</DialogTitle>
                  <DialogDescription>Update the details of this furniture item.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="edit-name"
                      value={selectedProduct.name}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                      className="col-span-3 border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-category" className="text-right">
                      Category
                    </Label>
                    <Select
                      value={selectedProduct.category}
                      onValueChange={(value) => setSelectedProduct({ ...selectedProduct, category: value })}
                    >
                      <SelectTrigger id="edit-category" className="col-span-3 border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sofas">Sofas</SelectItem>
                        <SelectItem value="Tables">Tables</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-subcategory" className="text-right">
                      Subcategory
                    </Label>
                    <Select
                      value={selectedProduct.subcategory}
                      onValueChange={(value) => setSelectedProduct({ ...selectedProduct, subcategory: value })}
                    >
                      <SelectTrigger id="edit-subcategory" className="col-span-3 border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedProduct.category === "Sofas" ? (
                          <>
                            <SelectItem value="Standard">Standard</SelectItem>
                            <SelectItem value="Sectional">Sectional</SelectItem>
                            <SelectItem value="Recliner">Recliner</SelectItem>
                            <SelectItem value="Sleeper">Sleeper</SelectItem>
                            <SelectItem value="Chesterfield">Chesterfield</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="Dining">Dining</SelectItem>
                            <SelectItem value="Coffee">Coffee</SelectItem>
                            <SelectItem value="Console">Console</SelectItem>
                            <SelectItem value="End">End</SelectItem>
                            <SelectItem value="Accent">Accent</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-price" className="text-right">
                      Price ($)
                    </Label>
                    <Input
                      id="edit-price"
                      type="number"
                      value={selectedProduct.price}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                      className="col-span-3 border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-stock" className="text-right">
                      Stock
                    </Label>
                    <Input
                      id="edit-stock"
                      type="number"
                      value={selectedProduct.stock}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, stock: e.target.value })}
                      className="col-span-3 border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-material" className="text-right">
                      Material
                    </Label>
                    <Input
                      id="edit-material"
                      value={selectedProduct.material}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, material: e.target.value })}
                      className="col-span-3 border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-color" className="text-right">
                      Color
                    </Label>
                    <Input
                      id="edit-color"
                      value={selectedProduct.color}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, color: e.target.value })}
                      className="col-span-3 border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-dimensions" className="text-right">
                      Dimensions
                    </Label>
                    <Input
                      id="edit-dimensions"
                      value={selectedProduct.dimensions}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, dimensions: e.target.value })}
                      className="col-span-3 border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="edit-description" className="text-right pt-2">
                      Description
                    </Label>
                    <Textarea
                      id="edit-description"
                      value={selectedProduct.description}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                      className="col-span-3 border-blue-200 focus:border-blue-400 min-h-[100px]"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={handleEditProduct}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  >
                    Update Furniture Item
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all-products">
        <TabsList className="bg-blue-50 border border-blue-100">
          <TabsTrigger value="all-products" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            All Furniture
          </TabsTrigger>
          <TabsTrigger value="sofas" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Sofas
          </TabsTrigger>
          <TabsTrigger value="tables" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Tables
          </TabsTrigger>
          <TabsTrigger value="low-stock" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Low Stock
          </TabsTrigger>
          <TabsTrigger value="out-of-stock" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            Out of Stock
          </TabsTrigger>
        </TabsList>

        <div className="flex flex-col gap-4 sm:flex-row mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-500" />
            <Input
              type="search"
              placeholder="Search furniture items..."
              className="pl-8 border-blue-200 focus:border-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[150px] border-blue-200 focus:border-blue-400">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Sofas">Sofas</SelectItem>
              <SelectItem value="Tables">Tables</SelectItem>
            </SelectContent>
          </Select>
          {categoryFilter !== "all" && (
            <Select value={subcategoryFilter} onValueChange={setSubcategoryFilter}>
              <SelectTrigger className="w-full sm:w-[150px] border-blue-200 focus:border-blue-400">
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {getSubcategories().map((subcategory) => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[150px] border-blue-200 focus:border-blue-400">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="In Stock">In Stock</SelectItem>
              <SelectItem value="Low Stock">Low Stock</SelectItem>
              <SelectItem value="Out of Stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <TabsContent value="all-products" className="mt-4">
          <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead className="w-[250px]">Furniture Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Material</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id} className="hover:bg-blue-50">
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-md overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <span className="font-medium">{product.name}</span>
                            <p className="text-xs text-muted-foreground truncate max-w-[200px]">{product.dimensions}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            product.category === "Sofas"
                              ? "border-blue-200 bg-blue-100 text-blue-700"
                              : "border-purple-200 bg-purple-100 text-purple-700"
                          }
                        >
                          {product.category} - {product.subcategory}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.material}</TableCell>
                      <TableCell className="font-medium text-green-600">${product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            product.status === "In Stock"
                              ? "bg-green-500"
                              : product.status === "Low Stock"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="text-blue-600" onClick={() => handleViewProduct(product)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-indigo-600" onClick={() => handleEditClick(product)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteProduct(product.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sofas" className="mt-4">
          <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-blue-700">Sofas Collection</CardTitle>
              <CardDescription>Manage your sofa inventory.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products
                  .filter((product) => product.category === "Sofas")
                  .map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden border-2 border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-blue-600">
                          {product.stock} in stock
                        </div>
                      </div>
                      <CardContent className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-blue-700">{product.name}</div>
                            <div className="text-sm text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                              {product.subcategory}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                              {product.material}
                            </span>
                            <span className="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">
                              {product.color}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">{product.dimensions}</div>
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-blue-600">${product.price.toFixed(2)}</div>
                            <Badge
                              className={
                                product.status === "In Stock"
                                  ? "bg-green-500"
                                  : product.status === "Low Stock"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }
                            >
                              {product.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                              onClick={() => handleViewProduct(product)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                              onClick={() => handleEditClick(product)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tables" className="mt-4">
          <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="text-purple-700">Tables Collection</CardTitle>
              <CardDescription>Manage your table inventory.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products
                  .filter((product) => product.category === "Tables")
                  .map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden border-2 border-purple-100 hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-purple-600">
                          {product.stock} in stock
                        </div>
                      </div>
                      <CardContent className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-purple-700">{product.name}</div>
                            <div className="text-sm text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                              {product.subcategory}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                              {product.material}
                            </span>
                            <span className="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">
                              {product.color}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">{product.dimensions}</div>
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-purple-600">${product.price.toFixed(2)}</div>
                            <Badge
                              className={
                                product.status === "In Stock"
                                  ? "bg-green-500"
                                  : product.status === "Low Stock"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }
                            >
                              {product.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                              onClick={() => handleViewProduct(product)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                              onClick={() => handleEditClick(product)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="low-stock" className="mt-4">
          <Card className="border-2 border-yellow-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardTitle className="text-yellow-700">Low Stock Furniture</CardTitle>
              <CardDescription>Furniture items that need to be restocked soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Furniture Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Reorder Level</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products
                    .filter((product) => product.status === "Low Stock")
                    .map((product) => (
                      <TableRow key={product.id} className="hover:bg-yellow-50">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-md overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <span className="font-medium">{product.name}</span>
                              <p className="text-xs text-muted-foreground">{product.dimensions}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              product.category === "Sofas"
                                ? "border-blue-200 bg-blue-100 text-blue-700"
                                : "border-purple-200 bg-purple-100 text-purple-700"
                            }
                          >
                            {product.category} - {product.subcategory}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium text-green-600">${product.price.toFixed(2)}</TableCell>
                        <TableCell className="text-yellow-600 font-medium">{product.stock}</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            className="mr-2 border-yellow-200 text-yellow-700 hover:bg-yellow-50"
                          >
                            Restock
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-200 text-blue-700 hover:bg-blue-50"
                            onClick={() => handleEditClick(product)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="out-of-stock" className="mt-4">
          <Card className="border-2 border-red-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50">
              <CardTitle className="text-red-700">Out of Stock Furniture</CardTitle>
              <CardDescription>Furniture items that need immediate restocking.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Furniture Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Last Stocked</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products
                    .filter((product) => product.status === "Out of Stock")
                    .map((product) => (
                      <TableRow key={product.id} className="hover:bg-red-50">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-md overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <span className="font-medium">{product.name}</span>
                              <p className="text-xs text-muted-foreground">{product.dimensions}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              product.category === "Sofas"
                                ? "border-blue-200 bg-blue-100 text-blue-700"
                                : "border-purple-200 bg-purple-100 text-purple-700"
                            }
                          >
                            {product.category} - {product.subcategory}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium text-green-600">${product.price.toFixed(2)}</TableCell>
                        <TableCell>April 15, 2025</TableCell>
                        <TableCell className="text-right">
                          <Button className="mr-2 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600">
                            Restock Now
                          </Button>
                          <Button
                            variant="outline"
                            className="border-blue-200 text-blue-700 hover:bg-blue-50"
                            onClick={() => handleEditClick(product)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedProduct && !isEditProductOpen && (
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-blue-700">Furniture Item Details</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-md overflow-hidden">
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">{selectedProduct.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className={
                        selectedProduct.category === "Sofas"
                          ? "border-blue-200 bg-blue-100 text-blue-700"
                          : "border-purple-200 bg-purple-100 text-purple-700"
                      }
                    >
                      {selectedProduct.category}
                    </Badge>
                    <Badge variant="outline" className="border-indigo-200 bg-indigo-100 text-indigo-700">
                      {selectedProduct.subcategory}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Description</p>
                  <p className="text-sm">{selectedProduct.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Material</p>
                    <p className="text-sm">{selectedProduct.material}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Color</p>
                    <p className="text-sm">{selectedProduct.color}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Dimensions</p>
                    <p className="text-sm">{selectedProduct.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <Badge
                      className={
                        selectedProduct.status === "In Stock"
                          ? "bg-green-500"
                          : selectedProduct.status === "Low Stock"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }
                    >
                      {selectedProduct.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Price</p>
                    <p className="text-xl font-bold text-green-600">${selectedProduct.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Stock</p>
                    <p className="text-xl font-bold">{selectedProduct.stock}</p>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="flex justify-between">
              <Button
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50"
                onClick={() => handleDeleteProduct(selectedProduct.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Item
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                onClick={() => {
                  setIsEditProductOpen(true)
                  setSelectedProduct(selectedProduct)
                }}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
