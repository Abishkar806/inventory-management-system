import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ReviewsLoading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-5 w-[350px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-[120px]" />
                    <Skeleton className="h-8 w-[60px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                  <Skeleton className="h-12 w-12 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="grid grid-cols-3 w-full md:w-[400px] gap-1">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-10" />
              ))}
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <Skeleton className="h-10 w-full md:w-[250px]" />
            <Skeleton className="h-10 w-full md:w-[180px]" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>

        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Skeleton className="w-20 h-20 rounded-md" />

                  <div className="flex-grow space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-[150px]" />
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Skeleton key={i} className="h-4 w-4 rounded-full" />
                              ))}
                          </div>
                          <Skeleton className="h-4 w-[80px]" />
                        </div>
                      </div>
                      <Skeleton className="h-6 w-[80px] rounded-full" />
                    </div>

                    <div className="space-y-2">
                      <Skeleton className="h-5 w-[200px]" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[90%]" />
                      <Skeleton className="h-4 w-[80%]" />
                    </div>

                    <div className="bg-muted/30 p-4 rounded-md space-y-3">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <div className="space-y-1">
                          <Skeleton className="h-4 w-[120px]" />
                          <Skeleton className="h-3 w-[80px]" />
                        </div>
                      </div>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[95%]" />
                    </div>

                    <div className="flex justify-end gap-2">
                      <Skeleton className="h-9 w-[80px]" />
                      <Skeleton className="h-9 w-[80px]" />
                      <Skeleton className="h-9 w-[120px]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-6 w-6 rounded-full flex-shrink-0" />
                <div className="space-y-2 w-full">
                  <Skeleton className="h-5 w-[100px]" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                </div>
              </div>
            ))}
        </CardContent>
        <div className="p-6 pt-0">
          <Skeleton className="h-10 w-full" />
        </div>
      </Card>
    </div>
  )
}
