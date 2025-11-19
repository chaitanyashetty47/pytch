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
    <>
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
                <BreadcrumbPage className="line-clamp-1">
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
          
          <div className="bg-[linear-gradient(to_bottom,#fafafa,#f5f5f5)] dark:bg-[linear-gradient(to_bottom,#2a2a2a,#1a1a1a)] rounded-xl p-4 dark:shadow-[0_2px_8px_rgba(0,0,0,0.3),0_1px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-1">
            <div className="flex flex-col h-full gap-2">
              <div className="flex items-center gap-2">
                <RupeesBagComponent className="size-5" />
                <h3 className="text-sm font-medium text-muted-foreground">Portfolio Value</h3>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-medium">₹12,345.67</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-normal text-muted-foreground">From last month</p>
                <Badge variant="outline" className="text-[12px] bg-green-300 text-green-800 dark:bg-green-600 dark:text-green-800">
                  <ArrowUpRight className="size-4" /> 
                  12.5%
                </Badge>
              </div>
            </div>
          </div>

          <div className="bg-[linear-gradient(to_bottom,#fafafa,#f5f5f5)] dark:bg-[linear-gradient(to_bottom,#2a2a2a,#1a1a1a)] rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3),0_1px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-1">
            <div className="flex flex-col h-full gap-2">
              <div className="flex items-center gap-2">
                <InvestmentComponent className="size-5" />
                <h3 className="text-sm font-medium text-muted-foreground">Active Investments</h3>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-medium">17</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-normal text-muted-foreground">Across 6 sectors</p>
              </div>
            </div>
          </div>

          <div className="bg-[linear-gradient(to_bottom,#fafafa,#f5f5f5)] dark:bg-[linear-gradient(to_bottom,#2a2a2a,#1a1a1a)] rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3),0_1px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-1">
            <div className="flex flex-col h-full gap-2">
              <div className="flex items-center gap-2">
                <LiquidAssetComponent className="size-5" />
                <h3 className="text-sm font-medium text-muted-foreground">Liquid Assets</h3>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-medium">₹45,00,345.67</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-normal text-muted-foreground">Available to trade</p>
      
              </div>
            </div>
          </div>
          
          
        </div>
        
        {/* Recent Activity Section */}
        <div className="mx-auto h-full w-full bg-[linear-gradient(to_bottom,#fafafa,#f5f5f5)] dark:bg-[linear-gradient(to_bottom,#2a2a2a,#1a1a1a)] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3),0_1px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-1">
          <div className="flex items-center justify-between">
             <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
             <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[12px] bg-primary/30 text-green-800 dark:bg-green-600 dark:text-green-800">
                   1M
                </Badge>
                <Badge variant="outline" className="text-[12px] bg-transparent text-green-800 dark:bg-green-600 dark:text-green-800">
                   3M
                </Badge>
                <Badge variant="outline" className="text-[12px] bg-transparent text-green-800 dark:bg-green-600 dark:text-green-800">
                   6M
                </Badge>
                <div className="w-20 h-7 border gap-1 border-primary/30 bg-muted flex items-center justify-center">
                  <span className="text-[12px] text-black dark:text-white">2025</span>
                  <ChevronDown className="size-4" />
                </div>
             </div>

          </div>
          <div className="mt-6">
            <PortfolioChart />
          </div>
        </div>
      </div>
    </>
  )
}
