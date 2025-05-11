import type React from "react"
import { Search, MessageSquare, FileText, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">Find answers to your questions or contact support</p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-10" />
        <Card className="border-0 bg-transparent">
          <CardContent className="p-6 md:p-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold">How can we help you today?</h2>
              <p className="text-muted-foreground">Search our knowledge base or browse frequently asked questions</p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for help..." className="pl-10 h-12 bg-background" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickHelpCard
          icon={<FileText className="h-8 w-8 text-blue-500" />}
          title="User Guides"
          description="Step-by-step guides to help you get the most out of our platform"
          linkText="Browse guides"
          linkHref="/dashboard/help/guides"
        />
        <QuickHelpCard
          icon={<MessageSquare className="h-8 w-8 text-green-500" />}
          title="Submit a Ticket"
          description="Can't find what you're looking for? Submit a support ticket"
          linkText="Create ticket"
          linkHref="/dashboard/help/ticket"
        />
        <QuickHelpCard
          icon={<Phone className="h-8 w-8 text-purple-500" />}
          title="Contact Us"
          description="Get in touch with our customer support team directly"
          linkText="Contact options"
          linkHref="/dashboard/help/contact"
        />
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid grid-cols-4 w-full md:w-[600px]">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="returns">Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account & Settings FAQ</CardTitle>
              <CardDescription>Frequently asked questions about your account and settings</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <FaqItem
                  question="How do I change my password?"
                  answer="To change your password, go to Settings > Security, then click on 'Change Password'. You'll need to enter your current password and then your new password twice to confirm."
                />
                <FaqItem
                  question="How do I update my profile information?"
                  answer="You can update your profile information by navigating to Settings > Profile. Here you can edit your name, email, phone number, and other personal details."
                />
                <FaqItem
                  question="Can I have multiple shipping addresses?"
                  answer="Yes, you can save multiple shipping addresses in your account. Go to Settings > Addresses to add, edit, or remove shipping addresses."
                />
                <FaqItem
                  question="How do I delete my account?"
                  answer="To delete your account, go to Settings > Account > Delete Account. Please note that this action is permanent and cannot be undone. All your data will be permanently removed from our system."
                />
                <FaqItem
                  question="How do I change my email notifications preferences?"
                  answer="You can manage your email notification preferences in Settings > Notifications. Here you can choose which types of emails you want to receive."
                />
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Orders & Shipping FAQ</CardTitle>
              <CardDescription>Frequently asked questions about orders and shipping</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <FaqItem
                  question="How do I track my order?"
                  answer="You can track your order by going to Orders in your account dashboard. Click on the specific order you want to track, and you'll see the current status and tracking information if available."
                />
                <FaqItem
                  question="What payment methods do you accept?"
                  answer="We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway."
                />
                <FaqItem
                  question="How long does shipping take?"
                  answer="Shipping times vary depending on your location and the shipping method chosen. Standard shipping typically takes 3-5 business days, while express shipping can take 1-2 business days."
                />
                <FaqItem
                  question="Can I change or cancel my order?"
                  answer="You can change or cancel your order only if it hasn't been processed yet. Go to Orders in your dashboard, select the order you want to modify, and click on 'Change Order' or 'Cancel Order' if these options are available."
                />
                <FaqItem
                  question="Do you ship internationally?"
                  answer="Yes, we ship to most countries worldwide. International shipping times and costs vary depending on the destination. You can see the shipping options available to your country during checkout."
                />
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Products FAQ</CardTitle>
              <CardDescription>Frequently asked questions about our products</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <FaqItem
                  question="How do I know if a product is in stock?"
                  answer="Product availability is shown on each product page. If a product is in stock, you'll see an 'Add to Cart' button. If it's out of stock, you'll see an 'Out of Stock' notice with an option to be notified when it's back in stock."
                />
                <FaqItem
                  question="Do you offer product warranties?"
                  answer="Yes, most of our products come with a manufacturer's warranty. The warranty period varies by product and is listed in the product specifications. Additional extended warranties may be available for purchase."
                />
                <FaqItem
                  question="How do I find product specifications?"
                  answer="Product specifications are listed on each product page under the 'Specifications' tab. This includes technical details, dimensions, compatibility information, and other relevant specifications."
                />
                <FaqItem
                  question="Can I request a product that's not in your catalog?"
                  answer="Yes, we accept special product requests. Please contact our customer support team with details about the product you're looking for, and we'll check if we can source it for you."
                />
                <FaqItem
                  question="How do I know if a product is compatible with my device?"
                  answer="Compatibility information is provided in the product specifications. If you're unsure, you can use our compatibility checker tool or contact customer support for assistance."
                />
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="returns" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Returns & Refunds FAQ</CardTitle>
              <CardDescription>Frequently asked questions about returns and refunds</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <FaqItem
                  question="What is your return policy?"
                  answer="We offer a 30-day return policy for most products. Items must be in their original condition with all packaging and accessories. Some products may have different return periods, which will be noted in the product description."
                />
                <FaqItem
                  question="How do I initiate a return?"
                  answer="To initiate a return, go to Orders in your dashboard, select the order containing the item you want to return, and click on 'Return Item'. Follow the instructions to complete the return process."
                />
                <FaqItem
                  question="How long does it take to process a refund?"
                  answer="Once we receive your returned item, it takes 1-2 business days to inspect it. After approval, refunds are processed within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution."
                />
                <FaqItem
                  question="Do I have to pay for return shipping?"
                  answer="If you're returning an item due to a defect or our error, we'll cover the return shipping costs. For returns due to change of mind or other reasons, you'll need to pay for return shipping unless stated otherwise in a promotion."
                />
                <FaqItem
                  question="Can I exchange an item instead of returning it?"
                  answer="Yes, you can exchange an item for a different size, color, or model. Initiate a return and select 'Exchange' instead of 'Refund'. Note that the new item must be of equal or greater value (you'll need to pay the difference if it's more expensive)."
                />
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Still need help?</CardTitle>
          <CardDescription>Our support team is here to assist you</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-2">Get a response within 24 hours</p>
              <a href="mailto:support@globaltech.com" className="text-blue-600 text-sm font-medium hover:underline">
                support@globaltech.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-2">Available Mon-Fri, 9AM-5PM EST</p>
              <a href="tel:+18001234567" className="text-blue-600 text-sm font-medium hover:underline">
                +1 (800) 123-4567
              </a>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            Submit a Support Ticket
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface QuickHelpCardProps {
  icon: React.ReactNode
  title: string
  description: string
  linkText: string
  linkHref: string
}

function QuickHelpCard({ icon, title, description, linkText, linkHref }: QuickHelpCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="bg-primary/10 p-3 w-fit rounded-lg">{icon}</div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between" asChild>
          <a href={linkHref}>
            {linkText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>
        <p className="text-muted-foreground">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  )
}
