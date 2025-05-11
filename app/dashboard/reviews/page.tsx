import type React from "react"
import { Star, Search, Filter, Edit, Trash, MessageSquare, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/button"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

export default function ReviewsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Reviews</h1>
          <p className="text-muted-foreground">Manage your product reviews and ratings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ReviewStatusCard
          icon={<Star className="h-5 w-5" />}
          title="Total Reviews"
          count={8}
          description="Reviews you've submitted"
          color="bg-blue-100 text-blue-800"
        />
        <ReviewStatusCard
          icon={<MessageSquare className="h-5 w-5" />}
          title="Responses"
          count={3}
          description="Replies to your reviews"
          color="bg-purple-100 text-purple-800"
        />
        <ReviewStatusCard
          icon={<Star className="h-5 w-5" />}
          title="Average Rating"
          count="4.2"
          description="Your average rating"
          color="bg-yellow-100 text-yellow-800"
        />
      </div>

      <Tabs defaultValue="published" className="w-full">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="responses">Responses</TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search reviews..." className="pl-10 w-full md:w-[250px]" />
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Rating</SelectItem>
                <SelectItem value="lowest">Lowest Rating</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="published" className="space-y-4 mt-2">
          <ReviewItem
            productName="Wireless Earbuds Pro"
            productImage="/wireless-earbuds.png"
            rating={5}
            date="May 5, 2025"
            title="Excellent sound quality and comfort"
            content="These earbuds exceeded my expectations. The sound quality is crystal clear with deep bass. The noise cancellation works perfectly in noisy environments. Battery life is impressive - I got about 6 hours on a single charge. The case is compact and feels premium. Highly recommend for anyone looking for high-quality wireless earbuds."
            hasResponse={true}
            responseDate="May 6, 2025"
            responseContent="Thank you for your wonderful review! We're thrilled to hear that you're enjoying the sound quality and battery life of our Wireless Earbuds Pro. We put a lot of effort into designing them for comfort and performance. Enjoy your music!"
          />

          <ReviewItem
            productName="10,000mAh Power Bank"
            productImage="/power-bank.png"
            rating={4}
            date="April 25, 2025"
            title="Great portable charger"
            content="This power bank has been a lifesaver during my travels. It charges my phone quickly and can fully charge it about 3 times before needing to be recharged itself. The only downside is that it's a bit bulky compared to some other power banks I've used. Otherwise, it's a solid product that does what it promises."
            hasResponse={false}
          />

          <ReviewItem
            productName="Premium Phone Case"
            productImage="/phone-case.png"
            rating={3}
            date="April 15, 2025"
            title="Decent protection but bulky"
            content="The case provides good protection for my phone and has saved it from a few drops already. The material feels durable and the buttons are responsive. However, it adds quite a bit of bulk to the phone, making it less comfortable to hold. The color is also slightly different from what was shown in the product images."
            hasResponse={true}
            responseDate="April 16, 2025"
            responseContent="Thank you for your feedback. We appreciate your comments about the protection our case provides. Regarding the bulkiness, we designed it to offer maximum protection, which does add some size. We'll take your feedback about the color accuracy into consideration for future product listings. Please reach out if you have any other concerns."
          />

          <ReviewItem
            productName="Bluetooth Speaker"
            productImage="/audio-speaker.png"
            rating={5}
            date="April 10, 2025"
            title="Amazing sound for its size"
            content="I'm impressed with how good this speaker sounds despite its compact size. The bass is punchy and the highs are clear. Battery life is excellent - I've used it for several beach days without needing to recharge. The waterproof feature works as advertised - it survived a splash without any issues. Definitely worth the price!"
            hasResponse={false}
          />
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4 mt-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                  <ImageWithFallback
                    src="/usb-hub.png"
                    alt="USB-C Hub"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">USB-C Hub</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="text-sm text-muted-foreground">Draft saved on May 7, 2025</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 w-fit">
                      Draft
                    </Badge>
                  </div>

                  <div className="mt-2">
                    <Input placeholder="Review title" value="Works well with my laptop" className="mb-2" />
                    <textarea
                      className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm"
                      placeholder="Write your review here..."
                      value="This USB-C hub has been working well with my laptop. It has all the ports I need and the data transfer speed is good. The build quality seems..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                    <Button size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Continue Editing
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                  <ImageWithFallback
                    src="/wireless-charger.png"
                    alt="Wireless Charger"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">Wireless Charger</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">Draft saved on May 2, 2025</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 w-fit">
                      Draft
                    </Badge>
                  </div>

                  <div className="mt-2">
                    <Input placeholder="Review title" value="Fast charging and sleek design" className="mb-2" />
                    <textarea
                      className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm"
                      placeholder="Write your review here..."
                      value="I've been using this wireless charger for about a week now and I'm impressed with how quickly it charges my phone. The design is sleek and..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                    <Button size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Continue Editing
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="responses" className="space-y-4 mt-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                  <ImageWithFallback
                    src="/wireless-earbuds.png"
                    alt="Wireless Earbuds Pro"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">Wireless Earbuds Pro</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">May 5, 2025</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 w-fit">
                      Published
                    </Badge>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-medium">Excellent sound quality and comfort</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      These earbuds exceeded my expectations. The sound quality is crystal clear with deep bass. The
                      noise cancellation works perfectly in noisy environments. Battery life is impressive - I got about
                      6 hours on a single charge. The case is compact and feels premium. Highly recommend for anyone
                      looking for high-quality wireless earbuds.
                    </p>
                  </div>

                  <div className="mt-4 bg-muted/30 p-4 rounded-md border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/abstract-gt.png" alt="Global Tech" className="h-6 w-6 rounded-full" />
                      <div>
                        <p className="text-sm font-medium">Global Tech Support</p>
                        <p className="text-xs text-muted-foreground">May 6, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Thank you for your wonderful review! We're thrilled to hear that you're enjoying the sound quality
                      and battery life of our Wireless Earbuds Pro. We put a lot of effort into designing them for
                      comfort and performance. Enjoy your music!
                    </p>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                  <ImageWithFallback
                    src="/phone-case.png"
                    alt="Premium Phone Case"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">Premium Phone Case</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[1, 2, 3].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 text-gray-300" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">April 15, 2025</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 w-fit">
                      Published
                    </Badge>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-medium">Decent protection but bulky</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The case provides good protection for my phone and has saved it from a few drops already. The
                      material feels durable and the buttons are responsive. However, it adds quite a bit of bulk to the
                      phone, making it less comfortable to hold. The color is also slightly different from what was
                      shown in the product images.
                    </p>
                  </div>

                  <div className="mt-4 bg-muted/30 p-4 rounded-md border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/abstract-gt.png" alt="Global Tech" className="h-6 w-6 rounded-full" />
                      <div>
                        <p className="text-sm font-medium">Global Tech Support</p>
                        <p className="text-xs text-muted-foreground">April 16, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Thank you for your feedback. We appreciate your comments about the protection our case provides.
                      Regarding the bulkiness, we designed it to offer maximum protection, which does add some size.
                      We'll take your feedback about the color accuracy into consideration for future product listings.
                      Please reach out if you have any other concerns.
                    </p>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                  <ImageWithFallback
                    src="/modern-smartwatch.png"
                    alt="Smart Watch Pro"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">Smart Watch Pro</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[1, 2].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 text-gray-300" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">April 5, 2025</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 w-fit">
                      Published
                    </Badge>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-medium">Battery life is disappointing</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The watch looks nice and has many features, but the battery life is terrible. It barely lasts a
                      day with normal use. The fitness tracking is also not very accurate. I've found discrepancies in
                      step counting and heart rate monitoring. For the price, I expected better performance.
                    </p>
                  </div>

                  <div className="mt-4 bg-muted/30 p-4 rounded-md border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/abstract-gt.png" alt="Global Tech" className="h-6 w-6 rounded-full" />
                      <div>
                        <p className="text-sm font-medium">Global Tech Support</p>
                        <p className="text-xs text-muted-foreground">April 6, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      We're sorry to hear about your experience with the Smart Watch Pro. The battery should last 2-3
                      days with normal use. It sounds like there might be an issue with your specific device. Please
                      contact our customer support team directly so we can troubleshoot or arrange a replacement.
                      Regarding the fitness tracking accuracy, we're constantly improving our algorithms through
                      software updates. Thank you for your feedback.
                    </p>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Review Guidelines</CardTitle>
          <CardDescription>Tips for writing helpful product reviews</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium">Be Specific</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Mention specific features and how they worked for you. Details help other shoppers make informed
                decisions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium">Be Honest</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Share your genuine experience with the product, including both positives and negatives.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <XCircle className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-medium">Avoid Personal Information</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Don't include personal details, contact information, or sensitive data in your reviews.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View Full Review Guidelines
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface ReviewStatusCardProps {
  icon: React.ReactNode
  title: string
  count: number | string
  description: string
  color: string
}

function ReviewStatusCard({ icon, title, count, description, color }: ReviewStatusCardProps) {
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

interface ReviewItemProps {
  productName: string
  productImage: string
  rating: number
  date: string
  title: string
  content: string
  hasResponse: boolean
  responseDate?: string
  responseContent?: string
}

function ReviewItem({
  productName,
  productImage,
  rating,
  date,
  title,
  content,
  hasResponse,
  responseDate,
  responseContent,
}: ReviewItemProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
            <ImageWithFallback
              src={productImage || "/placeholder.svg"}
              alt={productName}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="font-medium">{productName}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{date}</span>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 w-fit">
                Published
              </Badge>
            </div>

            <div className="mt-2">
              <h4 className="font-medium">{title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{content}</p>
            </div>

            {hasResponse && responseDate && responseContent && (
              <div className="mt-4 bg-muted/30 p-4 rounded-md border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/abstract-gt.png" alt="Global Tech" className="h-6 w-6 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">Global Tech Support</p>
                    <p className="text-xs text-muted-foreground">{responseDate}</p>
                  </div>
                </div>
                <p className="text-sm">{responseContent}</p>
              </div>
            )}

            <div className="flex justify-end mt-4 gap-2">
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Button>
              {!hasResponse && (
                <Button size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View Responses
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
