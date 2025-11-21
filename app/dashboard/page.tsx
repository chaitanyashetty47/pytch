import { InvestmentComponent, RupeesBagComponent, RupeeComponent, LiquidAssetComponent } from "@/components/emoji-component"
import { NavActions } from "@/components/nav-actions"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {Badge} from "@/components/ui/badge"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { PortfolioChart } from "@/components/portfolio-chart"

export default function DashboardPage() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <header className="flex h-14 shrink-0 items-center gap-2">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1 text-white">
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-3">
          <NavActions />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 px-4 py-10">
        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col h-full gap-2">
              <div className="flex items-center gap-2">
                <RupeesBagComponent className="size-5" />
                <h3 className="text-sm font-medium text-zinc-400">Portfolio Value</h3>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-medium text-white">₹12,345.67</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-normal text-zinc-500">From last month</p>
                <Badge variant="outline" className="text-[12px] border-green-500/50 text-green-400">
                  <ArrowUpRight className="size-4" />
                  12.5%
                </Badge>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col h-full gap-2">
              <div className="flex items-center gap-2">
                <InvestmentComponent className="size-5" />
                <h3 className="text-sm font-medium text-zinc-400">Active Investments</h3>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-medium text-white">17</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-normal text-zinc-500">Across 6 sectors</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col h-full gap-2">
              <div className="flex items-center gap-2">
                <LiquidAssetComponent className="size-5" />
                <h3 className="text-sm font-medium text-zinc-400">Liquid Assets</h3>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-medium text-white">₹45,00,345.67</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-normal text-zinc-500">Available to trade</p>

              </div>
            </div>
          </div>
          
          
        </div>
        
        {/* Portfolio Overview Section */}
        <div className="mx-auto h-full w-full bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-center justify-between">
             <h2 className="text-xl font-semibold mb-4 text-white">Portfolio Overview</h2>
             <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[12px] border-primary/50 text-primary bg-primary/10">
                   1M
                </Badge>
                <Badge variant="outline" className="text-[12px] border-zinc-600 text-zinc-400">
                   3M
                </Badge>
                <Badge variant="outline" className="text-[12px] border-zinc-600 text-zinc-400">
                   6M
                </Badge>
                <div className="w-20 h-7 border border-primary/30 bg-zinc-800/50 flex items-center justify-center">
                  <span className="text-[12px] text-white">2025</span>
                  <ChevronDown className="size-4" />
                </div>
             </div>

          </div>
          <div className="mt-6">
            <PortfolioChart />
          </div>
        </div>
      </div>
    </div>
  )
}
