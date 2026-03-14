import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-6">
      <h1 className="text-xl font-bold mb-10">
        AI Business Builder
      </h1>

      <ul className="space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/create">Create Business</Link></li>
        <li><Link href="/dashboard/businesses">My Businesses</Link></li>
        <li><Link href="/dashboard/analytics">Analytics</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </div>
  )
}
