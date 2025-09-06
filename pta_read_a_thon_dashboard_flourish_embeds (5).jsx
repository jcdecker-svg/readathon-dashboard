import React from "react"; // updated
import Image from "next/image";
import { Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BroadmorLogo from "../public/Broadmor PTA Mural.png";

// Simple iframe wrapper for Flourish charts
const Frame: React.FC<{ src: string; title?: string }> = ({ src, title }) => (
  <div className="relative w-full overflow-hidden rounded-2xl border shadow-sm bg-white" style={{ paddingTop: "62.5%" }}>
    <iframe
      title={title || "Flourish embed"}
      src={src}
      className="absolute inset-0 h-full w-full"
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
      sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      allow="fullscreen; clipboard-read; clipboard-write"
      allowFullScreen
    />
  </div>
);

// Announcement ticker — edit messages here
function Announcements() {
  const messages = [
    "16SEPT all the awards are given, keep going to reach your goals!",
    "Goals: 120000 Minutes read and $30,000 raised, lets beat 2024!",
    "\"The more that you read, the more things you will know. The more that you learn, the more places you'll go\" — Dr. Seuss ",
  ];

  return (
    <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-2 mb-4 text-sm font-medium text-yellow-900 animate-pulse">
      📢 {messages[0]}
    </div>
  );
}

// Stat card component
function Stat({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <Card className="rounded-2xl border bg-white shadow-sm">
      <CardContent className="flex items-center gap-3 p-4">
        <Icon className="h-6 w-6 text-blue-600" />
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
          <div className="text-lg font-bold">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}

// ---- Header (title + logo) -------------------------------------------
function Header({ title, logoSrc }: { title: string; logoSrc?: string }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="School logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-xl bg-blue-600" />
          )}
          <div>
            <h1 className="text-lg font-semibold leading-tight">Broadmor Elementary 2025 Read-a-Thon</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Live stats • Leaderboards • Achievements</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function ReadathonDashboard() {
  return (
    <div className="space-y-6">
      {/* Set your hosted logo URL below once you upload the Broadmor mural image */}
      <Header title="Broadmor Elementary 2025 Read-a-Thon" logoSrc={"/broadmor-logo.png"} />
      {/* Header with logo and title */}
      <div className="flex items-center gap-4">
        <Image src={BroadmorLogo} alt="Broadmor Logo" width={80} height={80} className="rounded-full border" />
        <h1 className="text-2xl font-bold">Broadmor Elementary 2025 Read-a-Thon</h1>
      </div>

      <Announcements />

      {/* Global stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat label="Total Minutes" value="48,900" icon={Users} />
        <Stat label="Students Participating" value="270" icon={Users} />
        <Stat label="Reading Achievements Met" value="263" icon={Trophy} />
      </div>

      {/* Tabs for navigation */}
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid grid-cols-3 rounded-2xl bg-gray-100 p-1">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="classrooms">Classroom Data</TabsTrigger>
          <TabsTrigger value="awards">Achievements</TabsTrigger>
        </TabsList>

        {/* Home Tab: 3x1 grid */}
        <TabsContent value="home" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Total Minutes Read</h3>
                <Frame src="https://flo.uri.sh/visualisation/24962948/embed" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Minutes and Fundraising Scatterplot</h3>
                <Frame src="https://flo.uri.sh/visualisation/25004763/embed" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Fundraising Goal Progress</h3>
                <Frame src="https://flo.uri.sh/visualisation/24962412/embed" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Classroom Data Tab: 2x2 grid */}
        <TabsContent value="classrooms" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Grade and Class Breakdowns Reading</h3>
                <Frame src="https://flo.uri.sh/visualisation/24962889/embed" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Grade and Class Breakdowns Fundraising</h3>
                <Frame src="https://flo.uri.sh/visualisation/24963199/embed" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Top 5 Classes by Minutes</h3>
                <Frame src="https://flo.uri.sh/visualisation/24963444/embed" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Top 5 Classes by Funds Raised</h3>
                <Frame src="https://flo.uri.sh/visualisation/24963377/embed" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Achievements/Awards Tab: 1x1 searchable + 2x1 grid */}
        <TabsContent value="awards" className="mt-4 space-y-6">
          <Card className="rounded-2xl border bg-white shadow-sm">
            <CardContent className="p-4">
              <h3 className="text-base font-semibold mb-2">Searchable Achievements and Awards</h3>
              <Frame src="https://flo.uri.sh/visualisation/25005484/embed" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Top Readers by Grade</h3>
                <Frame src="https://flo.uri.sh/visualisation/24996026/embed" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-2">Class Fundraising Gauges (By Class)</h3>
                <Frame src="https://flo.uri.sh/visualisation/25002840/embed" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
