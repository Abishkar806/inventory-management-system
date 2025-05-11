"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Box, Lock, Mail } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)

      // For demo purposes, hardcoded credentials
      if (formData.email === "admin@globaltech.com" && formData.password === "admin123") {
        toast({
          title: "Login successful",
          description: "Welcome back, Admin!",
        })
        router.push("/admin/dashboard")
      } else if (formData.email === "user@example.com" && formData.password === "user123") {
        toast({
          title: "Login successful",
          description: "Welcome back, User!",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Try admin@globaltech.com / admin123 or user@example.com / user123",
          variant: "destructive",
        })
      }
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col items-center justify-center p-8">
          <div className="relative h-64 w-64 mb-6">
            <Image
              src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Login Illustration"
              fill
              className="object-contain"
              crossOrigin="anonymous"
            />
          </div>
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Global Tech Inventory Management System
          </h1>
          <p className="text-center text-muted-foreground max-w-md">
            Streamline your inventory operations with our next-generation, AI-powered inventory management system.
          </p>
        </div>

        <Card className="w-full max-w-md overflow-hidden border-2 border-blue-100 shadow-xl">
          <div className="relative h-32 w-full bg-gradient-to-r from-blue-400 to-indigo-600">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 transform rounded-full border-4 border-white bg-white p-2">
              <Box className="h-16 w-16 text-primary" />
            </div>
          </div>
          <CardHeader className="mt-10 space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-primary">Welcome Back</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-blue-500" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="flex items-center">
                    <Lock className="mr-2 h-4 w-4 text-blue-500" />
                    Password
                  </Label>
                  <Link href="#" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              <div className="text-sm text-muted-foreground p-3 bg-blue-50 rounded-md border border-blue-100">
                <p className="font-medium text-blue-700">Demo Credentials:</p>
                <p>Admin: admin@globaltech.com / admin123</p>
                <p>User: user@example.com / user123</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
