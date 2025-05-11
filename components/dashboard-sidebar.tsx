"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  Box,
  FileText,
  Heart,
  HelpCircle,
  Home,
  LogOut,
  MessageSquare,
  Package,
  RotateCcw,
  Settings,
  ShoppingCart,
  Star,
  Users,
  Bell,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface DashboardSidebarProps {
  isAdmin?: boolean
}

export function DashboardSidebar({ isAdmin = false }: DashboardSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    })
    router.push("/login")
  }

  // Fix: Corrected path structure for user dashboard
  const basePath = isAdmin ? "/admin" : "/dashboard"

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Box className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Global Tech IMS
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === basePath}>
              <Link href={basePath}>
                <Home className="h-5 w-5 text-blue-500" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/products`}>
              <Link href={`${basePath}/products`}>
                <Package className="h-5 w-5 text-green-500" />
                <span>Products</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/cart`}>
              <Link href={`${basePath}/cart`}>
                <ShoppingCart className="h-5 w-5 text-orange-500" />
                <span>Cart</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/orders`}>
              <Link href={`${basePath}/orders`}>
                <Box className="h-5 w-5 text-indigo-500" />
                <span>Orders</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/wishlist`}>
              <Link href={`${basePath}/wishlist`}>
                <Heart className="h-5 w-5 text-pink-500" />
                <span>Wishlist</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/returns`}>
              <Link href={`${basePath}/returns`}>
                <RotateCcw className="h-5 w-5 text-cyan-500" />
                <span>Returns</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/invoices`}>
              <Link href={`${basePath}/invoices`}>
                <FileText className="h-5 w-5 text-yellow-500" />
                <span>Invoices</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/reviews`}>
              <Link href={`${basePath}/reviews`}>
                <Star className="h-5 w-5 text-amber-500" />
                <span>Reviews</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/notifications`}>
              <Link href={`${basePath}/notifications`}>
                <Bell className="h-5 w-5 text-blue-500" />
                <span>Notifications</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/help`}>
              <Link href={`${basePath}/help`}>
                <HelpCircle className="h-5 w-5 text-purple-500" />
                <span>Help Center</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {isAdmin && (
            <>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/users"}>
                  <Link href="/admin/users">
                    <Users className="h-5 w-5 text-purple-500" />
                    <span>Users</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/reports"}>
                  <Link href="/admin/reports">
                    <BarChart3 className="h-5 w-5 text-red-500" />
                    <span>Reports</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/admin/support"}>
                  <Link href="/admin/support">
                    <MessageSquare className="h-5 w-5 text-teal-500" />
                    <span>Support</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </>
          )}
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === `${basePath}/settings`}>
              <Link href={`${basePath}/settings`}>
                <Settings className="h-5 w-5 text-gray-500" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <Button
            variant="outline"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </SidebarFooter>
      <SidebarTrigger />
    </Sidebar>
  )
}
