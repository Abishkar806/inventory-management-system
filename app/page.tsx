import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Box, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Global Tech IMS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Global Tech Inventory Management System
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your inventory operations with our next-generation, AI-powered inventory management
                    system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/inventory-management-dashboard.png"
                  width={550}
                  height={550}
                  alt="Inventory Management Dashboard"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our inventory management system offers a comprehensive suite of features to streamline your
                  operations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden border-2 border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Box className="h-12 w-12 text-blue-500" />
                    <h3 className="text-xl font-bold text-blue-700">Inventory Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time tracking of inventory levels, locations, and movements.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-2 border-green-100 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <ShoppingCart className="h-12 w-12 text-green-500" />
                    <h3 className="text-xl font-bold text-green-700">Order Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Streamlined order processing, fulfillment, and tracking.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-2 border-orange-100 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <BarChart3 className="h-12 w-12 text-orange-500" />
                    <h3 className="text-xl font-bold text-orange-700">Advanced Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive reporting and analytics for data-driven decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-700">
                    About Global Tech
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Global Tech Corporation is a leading provider of innovative technology solutions for businesses
                    worldwide.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button variant="outline" className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/modern-tech-office.png"
                  width={550}
                  height={550}
                  alt="Global Tech Office"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team to learn more about our inventory management system.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-indigo-700">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">Email: info@globaltech.com</p>
                  <p className="text-sm text-muted-foreground">Phone: +1 (123) 456-7890</p>
                  <p className="text-sm text-muted-foreground">Address: 123 Tech Street, Silicon Valley, CA 94043</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-indigo-700">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-blue-500 hover:text-blue-700">
                      Twitter
                    </Link>
                    <Link href="#" className="text-blue-700 hover:text-blue-900">
                      LinkedIn
                    </Link>
                    <Link href="#" className="text-blue-600 hover:text-blue-800">
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Global Tech Corporation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
