import type React from "react"
import { Bell, Check, Clock, ShoppingBag, Tag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"

export default function NotificationsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Manage your notifications and preferences</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
          <Button variant="outline" size="sm">
            <X className="mr-2 h-4 w-4" />
            Clear all
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 w-full md:w-[400px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          <NotificationItem
            icon={<ShoppingBag className="h-5 w-5 text-blue-500" />}
            title="Order #GT-78945 has been shipped"
            description="Your order has been shipped and is on its way. Estimated delivery: May 15, 2025."
            time="2 hours ago"
            type="orders"
            isUnread
          />

          <NotificationItem
            icon={<Tag className="h-5 w-5 text-green-500" />}
            title="Flash Sale: 25% off on all accessories"
            description="Limited time offer! Get 25% off on all accessories. Sale ends in 48 hours."
            time="5 hours ago"
            type="promotions"
          />

          <NotificationItem
            icon={<Bell className="h-5 w-5 text-purple-500" />}
            title="System maintenance scheduled"
            description="The system will be undergoing maintenance on May 12, 2025 from 2:00 AM to 4:00 AM UTC."
            time="1 day ago"
            type="system"
          />

          <NotificationItem
            icon={<ShoppingBag className="h-5 w-5 text-blue-500" />}
            title="Order #GT-78932 has been delivered"
            description="Your order has been delivered. Please rate your experience."
            time="3 days ago"
            type="orders"
          />

          <NotificationItem
            icon={<Tag className="h-5 w-5 text-green-500" />}
            title="New products added to your wishlist category"
            description="5 new products have been added to the 'Electronics' category you're following."
            time="5 days ago"
            type="promotions"
          />
        </TabsContent>

        <TabsContent value="orders" className="space-y-4 mt-4">
          <NotificationItem
            icon={<ShoppingBag className="h-5 w-5 text-blue-500" />}
            title="Order #GT-78945 has been shipped"
            description="Your order has been shipped and is on its way. Estimated delivery: May 15, 2025."
            time="2 hours ago"
            type="orders"
            isUnread
          />

          <NotificationItem
            icon={<ShoppingBag className="h-5 w-5 text-blue-500" />}
            title="Order #GT-78932 has been delivered"
            description="Your order has been delivered. Please rate your experience."
            time="3 days ago"
            type="orders"
          />

          <NotificationItem
            icon={<ShoppingBag className="h-5 w-5 text-blue-500" />}
            title="Order #GT-78901 is ready for pickup"
            description="Your order is ready for pickup at our store. Please bring your ID."
            time="1 week ago"
            type="orders"
          />
        </TabsContent>

        <TabsContent value="promotions" className="space-y-4 mt-4">
          <NotificationItem
            icon={<Tag className="h-5 w-5 text-green-500" />}
            title="Flash Sale: 25% off on all accessories"
            description="Limited time offer! Get 25% off on all accessories. Sale ends in 48 hours."
            time="5 hours ago"
            type="promotions"
          />

          <NotificationItem
            icon={<Tag className="h-5 w-5 text-green-500" />}
            title="New products added to your wishlist category"
            description="5 new products have been added to the 'Electronics' category you're following."
            time="5 days ago"
            type="promotions"
          />

          <NotificationItem
            icon={<Tag className="h-5 w-5 text-green-500" />}
            title="Special offer for loyal customers"
            description="As a valued customer, you've been selected for an exclusive 15% discount on your next purchase."
            time="2 weeks ago"
            type="promotions"
          />
        </TabsContent>

        <TabsContent value="system" className="space-y-4 mt-4">
          <NotificationItem
            icon={<Bell className="h-5 w-5 text-purple-500" />}
            title="System maintenance scheduled"
            description="The system will be undergoing maintenance on May 12, 2025 from 2:00 AM to 4:00 AM UTC."
            time="1 day ago"
            type="system"
          />

          <NotificationItem
            icon={<Bell className="h-5 w-5 text-purple-500" />}
            title="Privacy policy update"
            description="Our privacy policy has been updated. Please review the changes."
            time="2 weeks ago"
            type="system"
          />

          <NotificationItem
            icon={<Bell className="h-5 w-5 text-purple-500" />}
            title="New feature: Product comparison"
            description="You can now compare products side by side. Try it out!"
            time="1 month ago"
            type="system"
          />
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NotificationPreference
              title="Order Updates"
              description="Receive notifications about your orders"
              emailEnabled
              pushEnabled
            />
            <NotificationPreference
              title="Promotions & Deals"
              description="Get notified about sales and special offers"
              emailEnabled
              pushEnabled={false}
            />
            <NotificationPreference
              title="Product Restocks"
              description="Be notified when wishlist items are back in stock"
              emailEnabled
              pushEnabled
            />
            <NotificationPreference
              title="System Announcements"
              description="Important updates about the platform"
              emailEnabled
              pushEnabled
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface NotificationItemProps {
  icon: React.ReactNode
  title: string
  description: string
  time: string
  type: "orders" | "promotions" | "system"
  isUnread?: boolean
}

function NotificationItem({ icon, title, description, time, type, isUnread }: NotificationItemProps) {
  const typeColors = {
    orders: "bg-blue-100 text-blue-800",
    promotions: "bg-green-100 text-green-800",
    system: "bg-purple-100 text-purple-800",
  }

  return (
    <Card className={`relative ${isUnread ? "border-l-4 border-l-blue-500" : ""}`}>
      <CardContent className="p-4 flex gap-4">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{title}</h3>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={typeColors[type]}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
              {isUnread && <div className="h-2 w-2 rounded-full bg-blue-500" />}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          <div className="flex items-center mt-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {time}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface NotificationPreferenceProps {
  title: string
  description: string
  emailEnabled: boolean
  pushEnabled: boolean
}

function NotificationPreference({ title, description, emailEnabled, pushEnabled }: NotificationPreferenceProps) {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground mb-1">Email</span>
          <div className={`h-4 w-8 rounded-full relative ${emailEnabled ? "bg-green-500" : "bg-gray-300"}`}>
            <div
              className={`absolute h-3 w-3 rounded-full bg-white top-0.5 transition-all ${emailEnabled ? "right-0.5" : "left-0.5"}`}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground mb-1">Push</span>
          <div className={`h-4 w-8 rounded-full relative ${pushEnabled ? "bg-green-500" : "bg-gray-300"}`}>
            <div
              className={`absolute h-3 w-3 rounded-full bg-white top-0.5 transition-all ${pushEnabled ? "right-0.5" : "left-0.5"}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
