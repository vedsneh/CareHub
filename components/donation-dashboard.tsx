"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Heart, Users, TrendingUp } from "lucide-react"

// Dummy data for donations
const donationData = [
  { month: "Jan", amount: 2400, donors: 45 },
  { month: "Feb", amount: 3100, donors: 52 },
  { month: "Mar", amount: 2800, donors: 48 },
  { month: "Apr", amount: 3900, donors: 61 },
  { month: "May", amount: 4200, donors: 75 },
  { month: "Jun", amount: 5100, donors: 89 },
]

const donorBreakdown = [
  { name: "One-time", value: 35, color: "hsl(142, 76%, 36%)" },
  { name: "Monthly", value: 42, color: "hsl(142, 71%, 50%)" },
  { name: "Corporate", value: 23, color: "hsl(142, 72%, 65%)" },
]

const recentDonations = [
  { id: 1, donor: "Ravindra Tiwari", amount: 150, date: "Dec 5, 2025", type: "One-time" },
  { id: 2, donor: "Santosh Prajapati", amount: 50, date: "Dec 4, 2025", type: "Monthly" },
  { id: 3, donor: "Global Tech Inc", amount: 2500, date: "Dec 3, 2025", type: "Corporate" },
  { id: 4, donor: "Adarsh Shukla ", amount: 100, date: "Dec 2, 2025", type: "One-time" },
  { id: 5, donor: "Parag Joshi", amount: 75, date: "Dec 1, 2025", type: "Monthly" },
]

export function DonationDashboard() {
  const totalDonations = 24700
  const totalDonors = 370
  const averageDonation = Math.round(totalDonations / totalDonors)
  const monthlyGrowth = 22

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" fill="white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Generosity Dashboard</h1>
          </div>
          <p className="text-slate-600 text-lg">Track the impact of our community's contributions</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Donations */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                Total Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-1">
  ₹{(totalDonations / 1000).toFixed(1)}K
</div>

              <p className="text-xs text-slate-500">Raised to date</p>
              <div className="mt-4 h-1 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-4/5"></div>
              </div>
            </CardContent>
          </Card>

          {/* Total Donors */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Users className="h-4 w-4 text-teal-600" />
                Active Donors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-teal-700 mb-1">{totalDonors}</div>
              <p className="text-xs text-slate-500">Compassionate supporters</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 bg-teal-100 rounded-full"
                    style={{
                      background:
                        i < 4
                          ? "linear-gradient(to right, rgb(13, 148, 136), rgb(20, 184, 166))"
                          : "rgb(204, 251, 241)",
                    }}
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Average Donation */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-cyan-600" />
                Avg. Donation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-1">
  ₹{averageDonation}
</div>

              <p className="text-xs text-slate-500">Per supporter</p>
              <div className="mt-4 text-xs text-slate-500">Supporting every cause matters</div>
            </CardContent>
          </Card>

          {/* Monthly Growth */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                Monthly Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-1">+{monthlyGrowth}%</div>
              <p className="text-xs text-slate-500">Compared to last month</p>
              <div className="mt-4 inline-block px-3 py-1 bg-emerald-50 rounded-full">
                <span className="text-xs font-medium text-emerald-700">Incredible momentum! 🚀</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Donation Trend */}
          <Card className="lg:col-span-2 border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Donation Trends</CardTitle>
              <CardDescription>Monthly donations and supporter growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={donationData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                  <XAxis dataKey="month" stroke="rgba(0,0,0,0.4)" />
                  <YAxis stroke="rgba(0,0,0,0.4)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid hsl(142, 76%, 36%)",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value) => [`₹${value}`, "Donations"]}

                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="hsl(142, 76%, 36%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(142, 76%, 36%)", r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Donations ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Donor Type Breakdown */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Donor Types</CardTitle>
              <CardDescription>Distribution of support</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={donorBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {donorBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
            <CardContent className="space-y-2 text-sm">
              {donorBreakdown.map((type, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: type.color }}></div>
                    <span className="text-slate-600">{type.name}</span>
                  </div>
                  <span className="font-semibold text-slate-900">{type.value}%</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Donations Table */}
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent Contributions</CardTitle>
            <CardDescription>Latest donations from our generous community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-emerald-100">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Donor</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDonations.map((donation, idx) => (
                    <tr
                      key={donation.id}
                      className={`border-b border-emerald-50 hover:bg-emerald-50/50 transition-colors ${idx === recentDonations.length - 1 ? "border-b-0" : ""}`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-semibold">
                            {donation.donor.charAt(0)}
                          </div>
                          <span className="text-slate-900 font-medium">{donation.donor}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-700">₹{donation.amount}
</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            donation.type === "Monthly"
                              ? "bg-teal-100 text-teal-700"
                              : donation.type === "Corporate"
                                ? "bg-cyan-100 text-cyan-700"
                                : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {donation.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600 text-sm">{donation.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-slate-600 text-sm">
            Thank you for being part of our mission. Together, we're making a difference. 💚
          </p>
        </div>
      </div>
    </div>
  )
}
