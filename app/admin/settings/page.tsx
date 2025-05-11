"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { Bell, CreditCard, Globe, Lock, Save, Settings } from "lucide-react"

export default function AdminSettingsPage() {
  const { toast } = useToast()
  const [generalSettings, setGeneralSettings] = useState({
    companyName: "Global Tech Corporation",
    email: "info@globaltech.com",
    phone: "+1 (123) 456-7890",
    address: "123 Tech Street, Silicon Valley, CA 94043",
    website: "https://globaltech.com",
    currency: "USD",
    timezone: "America/Los_Angeles",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    orderNotifications: true,
    inventoryAlerts: true,
    userRegistrations: true,
    marketingEmails: false,
    systemUpdates: true,
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: "90",
    sessionTimeout: "30",
    ipRestriction: false,
    auditLogging: true,
  })

  const handleGeneralSettingsSave = () => {
    toast({
      title: "Settings saved",
      description: "Your general settings have been updated successfully.",
    })
  }

  const handleNotificationSettingsSave = () => {
    toast({
      title: "Notification settings saved",
      description: "Your notification preferences have been updated successfully.",
    })
  }

  const handleSecuritySettingsSave = () => {
    toast({
      title: "Security settings saved",
      description: "Your security settings have been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
          System Settings
        </h1>
        <p className="text-muted-foreground">Manage your system settings and preferences.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="bg-gray-50 border border-gray-100">
          <TabsTrigger value="general" className="data-[state=active]:bg-gray-500 data-[state=active]:text-white">
            <Globe className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-gray-500 data-[state=active]:text-white">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-gray-500 data-[state=active]:text-white">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-gray-500 data-[state=active]:text-white">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4 space-y-4">
          <Card className="border-2 border-gray-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
              <CardTitle className="text-gray-700 flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>Configure your system's general settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={generalSettings.companyName}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, companyName: e.target.value })}
                    className="border-gray-200 focus:border-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={generalSettings.email}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, email: e.target.value })}
                    className="border-gray-200 focus:border-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={generalSettings.phone}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, phone: e.target.value })}
                    className="border-gray-200 focus:border-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={generalSettings.website}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, website: e.target.value })}
                    className="border-gray-200 focus:border-gray-400"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={generalSettings.address}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, address: e.target.value })}
                    className="border-gray-200 focus:border-gray-400"
                  />
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={generalSettings.currency}
                    onValueChange={(value) => setGeneralSettings({ ...generalSettings, currency: value })}
                  >
                    <SelectTrigger id="currency" className="border-gray-200 focus:border-gray-400">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={generalSettings.timezone}
                    onValueChange={(value) => setGeneralSettings({ ...generalSettings, timezone: value })}
                  >
                    <SelectTrigger id="timezone" className="border-gray-200 focus:border-gray-400">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                      <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                      <SelectItem value="Europe/London">London</SelectItem>
                      <SelectItem value="Europe/Paris">Paris</SelectItem>
                      <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t border-gray-100">
              <Button
                className="ml-auto bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700"
                onClick={handleGeneralSettingsSave}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4 space-y-4">
          <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-blue-700 flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure your notification preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="emailNotifications" className="flex flex-col space-y-1">
                    <span>Email Notifications</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive email notifications for important events.
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
                  <Label htmlFor="orderNotifications" className="flex flex-col space-y-1">
                    <span>Order Notifications</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive notifications for new orders and order status changes.
                    </span>
                  </Label>
                  <Switch
                    id="orderNotifications"
                    checked={notificationSettings.orderNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, orderNotifications: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="inventoryAlerts" className="flex flex-col space-y-1">
                    <span>Inventory Alerts</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive alerts for low stock and out of stock items.
                    </span>
                  </Label>
                  <Switch
                    id="inventoryAlerts"
                    checked={notificationSettings.inventoryAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, inventoryAlerts: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="userRegistrations" className="flex flex-col space-y-1">
                    <span>User Registrations</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive notifications when new users register.
                    </span>
                  </Label>
                  <Switch
                    id="userRegistrations"
                    checked={notificationSettings.userRegistrations}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, userRegistrations: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="marketingEmails" className="flex flex-col space-y-1">
                    <span>Marketing Emails</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive marketing emails and promotional offers.
                    </span>
                  </Label>
                  <Switch
                    id="marketingEmails"
                    checked={notificationSettings.marketingEmails}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, marketingEmails: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="systemUpdates" className="flex flex-col space-y-1">
                    <span>System Updates</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Receive notifications about system updates and maintenance.
                    </span>
                  </Label>
                  <Switch
                    id="systemUpdates"
                    checked={notificationSettings.systemUpdates}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, systemUpdates: checked })
                    }
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-blue-50 border-t border-blue-100">
              <Button
                className="ml-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                onClick={handleNotificationSettingsSave}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-4 space-y-4">
          <Card className="border-2 border-purple-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="text-purple-700 flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure your security settings and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="twoFactorAuth" className="flex flex-col space-y-1">
                    <span>Two-Factor Authentication</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Enable two-factor authentication for added security.
                    </span>
                  </Label>
                  <Switch
                    id="twoFactorAuth"
                    checked={securitySettings.twoFactorAuth}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })}
                  />
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                    <Select
                      value={securitySettings.passwordExpiry}
                      onValueChange={(value) => setSecuritySettings({ ...securitySettings, passwordExpiry: value })}
                    >
                      <SelectTrigger id="passwordExpiry" className="border-purple-200 focus:border-purple-400">
                        <SelectValue placeholder="Select expiry period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Select
                      value={securitySettings.sessionTimeout}
                      onValueChange={(value) => setSecuritySettings({ ...securitySettings, sessionTimeout: value })}
                    >
                      <SelectTrigger id="sessionTimeout" className="border-purple-200 focus:border-purple-400">
                        <SelectValue placeholder="Select timeout period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="120">120 minutes</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="ipRestriction" className="flex flex-col space-y-1">
                    <span>IP Restriction</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Restrict access to specific IP addresses.
                    </span>
                  </Label>
                  <Switch
                    id="ipRestriction"
                    checked={securitySettings.ipRestriction}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, ipRestriction: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="auditLogging" className="flex flex-col space-y-1">
                    <span>Audit Logging</span>
                    <span className="font-normal text-sm text-muted-foreground">
                      Enable audit logging for all system activities.
                    </span>
                  </Label>
                  <Switch
                    id="auditLogging"
                    checked={securitySettings.auditLogging}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, auditLogging: checked })}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-purple-50 border-t border-purple-100">
              <Button
                className="ml-auto bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                onClick={handleSecuritySettingsSave}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Security Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-4 space-y-4">
          <Card className="border-2 border-green-100 hover:shadow-md transition-all">
            <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
              <CardTitle className="text-green-700 flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Billing Settings
              </CardTitle>
              <CardDescription>Manage your billing information and subscription.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-green-700">Current Plan</h3>
                    <p className="text-sm text-muted-foreground">Enterprise Plan</p>
                  </div>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Billing Cycle</p>
                    <p className="text-sm">Annual</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Next Billing Date</p>
                    <p className="text-sm">January 1, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Amount</p>
                    <p className="text-sm">$1,999.00 / year</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-700">Payment Method</h3>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-green-100">
                  <div className="h-10 w-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold">
                    VISA
                  </div>
                  <div>
                    <p className="text-sm font-medium">Visa ending in 4242</p>
                    <p className="text-xs text-muted-foreground">Expires 12/2028</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto border-green-200 text-green-700 hover:bg-green-50"
                  >
                    Update
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-700">Billing Address</h3>
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <p className="text-sm">Global Tech Corporation</p>
                  <p className="text-sm">123 Tech Street</p>
                  <p className="text-sm">Silicon Valley, CA 94043</p>
                  <p className="text-sm">United States</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-green-200 text-green-700 hover:bg-green-50"
                  >
                    Update Address
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-700">Billing History</h3>
                <div className="bg-white rounded-lg border border-green-100 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-green-700">Date</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-green-700">Description</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-green-700">Amount</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-green-700">Status</th>
                        <th className="px-4 py-2 text-right text-sm font-medium text-green-700">Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                      <tr>
                        <td className="px-4 py-3 text-sm">Jan 1, 2025</td>
                        <td className="px-4 py-3 text-sm">Annual Subscription</td>
                        <td className="px-4 py-3 text-sm">$1,999.00</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Paid</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-right">
                          <Button variant="ghost" size="sm" className="h-6 text-green-700 hover:bg-green-50">
                            Download
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Jan 1, 2024</td>
                        <td className="px-4 py-3 text-sm">Annual Subscription</td>
                        <td className="px-4 py-3 text-sm">$1,899.00</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Paid</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-right">
                          <Button variant="ghost" size="sm" className="h-6 text-green-700 hover:bg-green-50">
                            Download
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-green-50 border-t border-green-100">
              <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                Cancel Subscription
              </Button>
              <Button className="ml-auto bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
