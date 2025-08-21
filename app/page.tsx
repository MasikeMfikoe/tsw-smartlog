import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TSW SmartLog</h1>
          <p className="text-xl text-gray-600">Smart Logistics Management System</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Shipment Tracker</CardTitle>
              <CardDescription>
                Track your shipments in real-time with our advanced tracking system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tracking" legacyBehavior>
                <a className="w-full">
                  <Button className="w-full">
                    Go to Shipment Tracker
                  </Button>
                </a>
              </Link>
            </CardContent>
          </Card>

      </div>
    </div>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Create tracking-only users for your customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/user-creator" legacyBehavior>
                <a className="w-full">
                  <Button className="w-full" variant="outline">
                    Create Tracking User
                  </Button>
                </a>
              </Link>
            </CardContent>
}
  )
}