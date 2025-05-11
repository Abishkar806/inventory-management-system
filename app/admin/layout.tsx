import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar isAdmin={true} />
      <div className="flex-1 overflow-auto">
        <div className="container p-4 md:p-6">{children}</div>
      </div>
    </div>
  )
}
