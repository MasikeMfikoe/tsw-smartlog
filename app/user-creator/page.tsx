import TrackingUserCreator from "@/tracking-user-creator"

export default function UserCreatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Tracking User</h1>
          <p className="text-gray-600">Create users with restricted access to tracking functionality</p>
        </div>
        <TrackingUserCreator />
      </div>
    </div>
  )
}