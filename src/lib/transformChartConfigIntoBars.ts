import { ChartConfig } from "@/components/ui/chart";
import { BarType } from "@/components/BarChart";

export function transformChartConfig(chartConfig: ChartConfig): BarType[] {
  return Object.entries(chartConfig).map(([key, { color }]) => ({
    key,
    fill: color!,
  }));
}
