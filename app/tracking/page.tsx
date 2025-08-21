import ShipmentTracker from "@/ShipmentTracker"

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shipment Tracking</h1>
          <p className="text-gray-600">Track your containers and shipments in real-time</p>
        </div>
        <ShipmentTracker />
      </div>
    </div>
  )
}