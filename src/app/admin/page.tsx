"use client";

import {
  FileText,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  ArrowUpRight,
  BarChart3,
  Mail,
  Phone,
  Star,
  Lock,
} from "lucide-react";

// Mock data for dashboard
const stats = [
  {
    label: "Total Referrals",
    value: "47",
    change: "+12%",
    trend: "up",
    icon: FileText,
    color: "from-blue-400 to-indigo-500",
  },
  {
    label: "Active Participants",
    value: "23",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "from-green-400 to-emerald-500",
  },
  {
    label: "Pending Contacts",
    value: "8",
    change: "-3",
    trend: "down",
    icon: MessageSquare,
    color: "from-yellow-400 to-orange-500",
  },
  {
    label: "This Month",
    value: "$12,450",
    change: "+23%",
    trend: "up",
    icon: TrendingUp,
    color: "from-purple-400 to-violet-500",
  },
];

const recentReferrals = [
  { name: "Sarah Mitchell", service: "Personal Care", status: "new", time: "2 hours ago" },
  { name: "James Wilson", service: "Community Access", status: "contacted", time: "5 hours ago" },
  { name: "Emma Thompson", service: "Plan Management", status: "approved", time: "1 day ago" },
  { name: "Michael Chen", service: "Psychosocial Recovery", status: "new", time: "2 days ago" },
];

const upcomingAppointments = [
  { participant: "David L.", type: "Initial Assessment", date: "Today, 2:00 PM" },
  { participant: "Priya S.", type: "Care Review", date: "Tomorrow, 10:00 AM" },
  { participant: "Robert W.", type: "Plan Meeting", date: "Jan 3, 3:30 PM" },
];

const comingSoonFeatures = [
  {
    title: "Referral Management",
    description: "View, filter, and manage all incoming referrals. Assign to team members and track progress.",
    icon: FileText,
    status: "Coming Soon",
  },
  {
    title: "Contact Inbox",
    description: "Unified inbox for all contact form submissions. Reply directly and convert to referrals.",
    icon: Mail,
    status: "Coming Soon",
  },
  {
    title: "Participant Directory",
    description: "Complete database of participants with profiles, care plans, and support history.",
    icon: Users,
    status: "Coming Soon",
  },
  {
    title: "Appointment Calendar",
    description: "Schedule and manage appointments. Sync with Google Calendar and send reminders.",
    icon: Calendar,
    status: "Coming Soon",
  },
  {
    title: "Analytics & Reports",
    description: "Insights into referral sources, service popularity, and revenue tracking.",
    icon: BarChart3,
    status: "Coming Soon",
  },
  {
    title: "Team Management",
    description: "Add support workers, assign roles, and manage schedules.",
    icon: Users,
    status: "Coming Soon",
  },
  {
    title: "SMS & Email Automation",
    description: "Automated appointment reminders, follow-ups, and marketing campaigns.",
    icon: Phone,
    status: "Coming Soon",
  },
  {
    title: "Review Management",
    description: "Request and manage Google reviews. Respond to feedback from one place.",
    icon: Star,
    status: "Coming Soon",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
          <p className="text-neutral-600">Welcome back, Meshach</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-500">Last updated: Just now</span>
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-[#1565C0] transition-colors">
            Refresh Data
          </button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-5 border border-neutral-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.trend === "up"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent referrals */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-neutral-200">
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="font-semibold text-neutral-900">Recent Referrals</h2>
            <button className="text-sm text-[#1565C0] hover:text-[#0D47A1] font-medium flex items-center gap-1">
              View All <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="divide-y divide-neutral-100">
            {recentReferrals.map((referral, index) => (
              <div key={index} className="p-4 flex items-center justify-between hover:bg-neutral-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {referral.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{referral.name}</p>
                    <p className="text-sm text-neutral-500">{referral.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                      referral.status === "new"
                        ? "bg-blue-100 text-blue-700"
                        : referral.status === "contacted"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {referral.status === "new" && <AlertCircle className="w-3 h-3" />}
                    {referral.status === "contacted" && <Clock className="w-3 h-3" />}
                    {referral.status === "approved" && <CheckCircle className="w-3 h-3" />}
                    {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                  </span>
                  <p className="text-xs text-neutral-400 mt-1">{referral.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming appointments */}
        <div className="bg-white rounded-xl border border-neutral-200">
          <div className="p-5 border-b border-neutral-200">
            <h2 className="font-semibold text-neutral-900">Upcoming Appointments</h2>
          </div>
          <div className="p-4 space-y-4">
            {upcomingAppointments.map((apt, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{apt.participant}</p>
                  <p className="text-sm text-neutral-500">{apt.type}</p>
                  <p className="text-xs text-primary font-medium mt-1">{apt.date}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-2 text-sm text-[#1565C0] hover:text-white font-medium border border-[#1565C0] rounded-lg hover:bg-[#1565C0] transition-colors">
              View Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Coming Soon Features */}
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center">
            <Lock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Coming Soon</h2>
            <p className="text-neutral-500">Premium features included in your package</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {comingSoonFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                  <feature.icon className="w-5 h-5 text-neutral-500 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                  {feature.status}
                </span>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-gradient-to-r from-primary to-primary-800 rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Need Help Setting Up?</h3>
            <p className="text-primary-100 mt-1">
              Your admin dashboard will be fully configured once the backend integration is complete.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:support@opbros.online"
              className="px-5 py-2.5 bg-white text-[#1565C0] font-medium rounded-lg hover:bg-[#E3F2FD] transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/"
              className="px-5 py-2.5 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
