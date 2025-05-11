"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { Bell, CreditCard, Home, Lock, MapPin, Save, User } from "lucide-react"
import Image from "next/image"

export default function UserSettingsPage() {
  const { toast } = useToast()
  const [accountData, setAccountData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    avatar: "/avatars/avatar-1.png",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    promotions: false,
    productUpdates: true,
  })

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "United States",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      street: "456 Office Blvd",
      city: "Worktown",
      state: "CA",
      zip: "67890",
      country: "United States",
      isDefault: false,
    },
  ])

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Credit Card",
      cardType: "Visa",
      last4: "4242",
      expiry: "12/2028",
      isDefault: true,
    },
    {
      id: 2,
      type: "Credit Card",
      cardType: "Mastercard",
      last4: "5678",
      expiry: "09/2027",
      isDefault: false,
    },
  ])

  const handleAccountUpdate = () => {
    toast({
      title: "Account updated",
      description: "Your account information has been updated successfully.",
    })
  }

  const handlePasswordUpdate = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Password updated",
      description: "Your password has been updated successfully.",
    })

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  const handleNotificationUpdate = () => {
    toast({
      title: "Notification preferences updated",
      description: "Your notification preferences have been updated successfully.",
    })
  }

  const handleSetDefaultAddress = (id: number) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    )
    toast({
      title: "Default address updated",
      description: "Your default address has been updated successfully.",
    })
  }

  const handleSetDefaultPayment = (id: number) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
    toast({
      title: "Default payment method updated",
      description: "Your default payment method has been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Account Settings
        </h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="account">
        <TabsList className="bg-blue-50 border border-blue-100">
          <TabsTrigger value="account" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <User className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="addresses" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <MapPin className="mr-2 h-4 w-4" />
            Addresses
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <CreditCard className="mr-2 h-4 w-4" />
            Payment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-4 space-y-4">
          <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-blue-700 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Account Information
              </CardTitle>
              <CardDescription>Update your account information and profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100">
                    <Image src={accountData.avatar || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
                  </div>
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={accountData.firstName}
                      onChange={(e) => setAccountData({ ...accountData, firstName: e.target.value })}
                      className="border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={accountData.lastName}
                      onChange={(e) => setAccountData({ ...accountData, lastName: e.target.value })}
                      className="border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={accountData.email}
                      onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
                      className="border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={accountData.phone}
                      onChange={(e) => setAccountData({ ...accountData, phone: e.target.value })}
                      className="border-blue-200 focus:border-blue-400"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-blue-50 border-t border-blue-100">
              <Button
                className="ml-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                onClick={handleAccountUpdate}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-4 space-y-4">
          <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="text-purple-700 flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Change Password
              </CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-purple-50 border-t border-purple-100">
              <Button
                className="ml-auto bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                onClick={handlePasswordUpdate}
              >
                <Save className="mr-2 h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4 space-y-4">
          <Card className="border-2 border-green-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
              <CardTitle className="text-green-700 flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Manage how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="emailNotifications" className="flex flex-col space-y-1">
                    <span>Email Notifications</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive email notifications for important updates.
                    </span>
                  </Label>
                  <Switch
                    id="emailNotifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="orderUpdates" className="flex flex-col space-y-1">
                    <span>Order Updates</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive notifications about your order status.
                    </span>
                  </Label>
                  <Switch
                    id="orderUpdates"
                    checked={notificationSettings.orderUpdates}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, orderUpdates: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="promotions" className="flex flex-col space-y-1">
                    <span>Promotions and Offers</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive notifications about promotions and special offers.
                    </span>
                  </Label>
                  <Switch
                    id="promotions"
                    checked={notificationSettings.promotions}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, promotions: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="productUpdates" className="flex flex-col space-y-1">
                    <span>Product Updates</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive notifications about product updates and new features.
                    </span>
                  </Label>
                  <Switch
                    id="productUpdates"
                    checked={notificationSettings.productUpdates}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, productUpdates: checked })
                    }
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-green-50 border-t border-green-100">
              <Button
                className="ml-auto bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                onClick={handleNotificationUpdate}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="addresses" className="mt-4 space-y-4">
          <Card className="border-2 border-orange-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="text-orange-700 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Shipping Addresses
              </CardTitle>
              <CardDescription>Manage your shipping addresses.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`p-4 rounded-lg border-2 ${
                      address.isDefault ? "border-orange-300 bg-orange-50" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <Home className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="font-medium text-orange-700">{address.type}</span>
                      </div>
                      {address.isDefault && (
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Default</span>
                      )}
                    </div>
                    <div className="mt-2 space-y-1 text-sm">
                      <p className="font-medium">{address.name}</p>
                      <p>{address.street}</p>
                      <p>
                        {address.city}, {address.state} {address.zip}
                      </p>
                      <p>{address.country}</p>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-200 text-orange-700 hover:bg-orange-50"
                      >
                        Edit
                      </Button>
                      {!address.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-200 text-orange-700 hover:bg-orange-50"
                          onClick={() => handleSetDefaultAddress(address.id)}
                        >
                          Set as Default
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                <MapPin className="mr-2 h-4 w-4" />
                Add New Address
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="mt-4 space-y-4">
          <Card className="border-2 border-cyan-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardTitle className="text-cyan-700 flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Methods
              </CardTitle>
              <CardDescription>Manage your payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 rounded-lg border-2 ${
                      method.isDefault ? "border-cyan-300 bg-cyan-50" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold text-xs">
                          {method.cardType}
                        </div>
                        <span className="font-medium text-cyan-700 ml-2">•••• {method.last4}</span>
                      </div>
                      {method.isDefault && (
                        <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded-full">Default</span>
                      )}
                    </div>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>
                        <span className="text-muted-foreground">Expires:</span> {method.expiry}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Button variant="outline" size="sm" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                        Edit
                      </Button>
                      {!method.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan-200 text-cyan-700 hover:bg-cyan-50"
                          onClick={() => handleSetDefaultPayment(method.id)}
                        >
                          Set as Default
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <CreditCard className="mr-2 h-4 w-4" />
                Add New Payment Method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
