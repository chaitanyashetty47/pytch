"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: "2025-09-01", amount: 3500000 },
  { date: "2025-09-05", amount: 3650000 },
  { date: "2025-09-10", amount: 3800000 },
  { date: "2025-09-15", amount: 3750000 },
  { date: "2025-09-20", amount: 3900000 },
  { date: "2025-09-25", amount: 4050000 },
  { date: "2025-09-30", amount: 4100000 },
  { date: "2025-10-05", amount: 4200000 },
  { date: "2025-10-10", amount: 4150000 },
  { date: "2025-10-15", amount: 4300000 },
  { date: "2025-10-20", amount: 4500000 },
  { date: "2025-10-25", amount: 4450000 },
  { date: "2025-10-30", amount: 4600000 },
  { date: "2025-11-05", amount: 4750000 },
  { date: "2025-11-10", amount: 4700000 },
  { date: "2025-11-15", amount: 4850000 },
  { date: "2025-11-20", amount: 5000000 },
  { date: "2025-11-25", amount: 4950000 },
  { date: "2025-11-30", amount: 5100000 },
]

const chartConfig = {
  amount: {
    label: "Portfolio Performance",
    color: "#DAFF01",
  },
} satisfies ChartConfig

export function PortfolioChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[300px] w-full"
    >
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="fillAmount" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="#DAFF01"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="#DAFF01"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value)
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            return `₹${(value / 100000).toFixed(1)}L`
          }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
              formatter={(value) => {
                return `₹${Number(value).toLocaleString("en-IN")}`
              }}
              indicator="dot"
            />
          }
        />
        <Area
          dataKey="amount"
          type="monotone"
          fill="url(#fillAmount)"
          stroke="#DAFF01"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  )
}

