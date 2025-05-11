import type React from "react"
import { FileText, Download, Printer, Search, Filter, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/button"

export default function InvoicesPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices & Receipts</h1>
          <p className="text-muted-foreground">View and download your invoices and receipts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InvoiceStatusCard
          icon={<FileText className="h-5 w-5" />}
          title="Total Invoices"
          count={12}
          description="All time invoices"
          color="bg-blue-100 text-blue-800"
        />
        <InvoiceStatusCard
          icon={<FileText className="h-5 w-5" />}
          title="Paid Invoices"
          count={10}
          description="Successfully paid"
          color="bg-green-100 text-green-800"
        />
        <InvoiceStatusCard
          icon={<FileText className="h-5 w-5" />}
          title="Pending Invoices"
          count={2}
          description="Awaiting payment"
          color="bg-yellow-100 text-yellow-800"
        />
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Invoice History</CardTitle>
              <CardDescription>View and manage all your invoices</CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search invoices..." className="pl-10 w-full md:w-[250px]" />
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="highest">Highest Amount</SelectItem>
                  <SelectItem value="lowest">Lowest Amount</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice #</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Order #</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <InvoiceRow
                invoiceId="INV-78945"
                date="May 5, 2025"
                orderId="ORD-12345"
                amount="$129.99"
                status="Paid"
                statusColor="bg-green-100 text-green-800"
              />

              <InvoiceRow
                invoiceId="INV-78946"
                date="May 3, 2025"
                orderId="ORD-12346"
                amount="$49.99"
                status="Paid"
                statusColor="bg-green-100 text-green-800"
              />

              <InvoiceRow
                invoiceId="INV-78947"
                date="May 1, 2025"
                orderId="ORD-12347"
                amount="$24.99"
                status="Pending"
                statusColor="bg-yellow-100 text-yellow-800"
              />

              <InvoiceRow
                invoiceId="INV-78940"
                date="April 25, 2025"
                orderId="ORD-12340"
                amount="$79.99"
                status="Paid"
                statusColor="bg-green-100 text-green-800"
              />

              <InvoiceRow
                invoiceId="INV-78941"
                date="April 20, 2025"
                orderId="ORD-12341"
                amount="$39.99"
                status="Paid"
                statusColor="bg-green-100 text-green-800"
              />

              <InvoiceRow
                invoiceId="INV-78942"
                date="April 15, 2025"
                orderId="ORD-12342"
                amount="$34.99"
                status="Pending"
                statusColor="bg-yellow-100 text-yellow-800"
              />

              <InvoiceRow
                invoiceId="INV-78943"
                date="April 10, 2025"
                orderId="ORD-12343"
                amount="$149.99"
                status="Paid"
                statusColor="bg-green-100 text-green-800"
              />

              <InvoiceRow
                invoiceId="INV-78944"
                date="April 5, 2025"
                orderId="ORD-12344"
                amount="$89.99"
                status="Paid"
                statusColor="bg-green-100 text-green-800"
              />
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>8</strong> of <strong>12</strong> invoices
            </div>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary/10">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Featured Invoice</CardTitle>
          <CardDescription>Your most recent invoice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">Invoice #INV-78945</h3>
                <p className="text-muted-foreground">May 5, 2025</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="flex items-center justify-end">
                  <img src="/abstract-gt.png" alt="Global Tech Logo" className="h-10 w-10 mr-2" />
                  <div>
                    <h4 className="font-bold">Global Tech</h4>
                    <p className="text-sm text-muted-foreground">Inventory Management System</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-medium mb-2">Bill To:</h4>
                <p className="text-sm">John Doe</p>
                <p className="text-sm">123 Main Street</p>
                <p className="text-sm">Anytown, ST 12345</p>
                <p className="text-sm">United States</p>
                <p className="text-sm mt-2">john.doe@example.com</p>
              </div>
              <div className="md:text-right">
                <div className="flex justify-between md:justify-end md:gap-8">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Invoice Number:</h4>
                    <p className="text-sm">INV-78945</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Order Number:</h4>
                    <p className="text-sm">ORD-12345</p>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end md:gap-8 mt-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Invoice Date:</h4>
                    <p className="text-sm">May 5, 2025</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Payment Method:</h4>
                    <p className="text-sm">Credit Card</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Unit Price</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>
                        <p className="font-medium">Wireless Earbuds Pro</p>
                        <p className="text-sm text-muted-foreground">
                          Premium wireless earbuds with noise cancellation
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">1</TableCell>
                    <TableCell className="text-right">$129.99</TableCell>
                    <TableCell className="text-right">$129.99</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-end">
              <div className="w-full md:w-1/3">
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span>$129.99</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Tax (8%):</span>
                  <span>$10.40</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Shipping:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between py-2 font-bold border-t">
                  <span>Total:</span>
                  <span>$140.39</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h4 className="text-sm font-medium mb-2">Notes:</h4>
              <p className="text-sm text-muted-foreground">
                Thank you for your purchase! If you have any questions about this invoice, please contact our customer
                support team.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-4 gap-2">
            <Button variant="outline" size="sm">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface InvoiceStatusCardProps {
  icon: React.ReactNode
  title: string
  count: number
  description: string
  color: string
}

function InvoiceStatusCard({ icon, title, count, description, color }: InvoiceStatusCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{count}</h3>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className={`p-3 rounded-full ${color}`}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

interface InvoiceRowProps {
  invoiceId: string
  date: string
  orderId: string
  amount: string
  status: string
  statusColor: string
}

function InvoiceRow({ invoiceId, date, orderId, amount, status, statusColor }: InvoiceRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{invoiceId}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{orderId}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>
        <Badge className={statusColor}>{status}</Badge>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
