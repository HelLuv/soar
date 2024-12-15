import { ChartConfig } from "@/shared/ui/chart";
import { BarType } from "@/shared/components/BarChart";

export function transformChartConfig(chartConfig: ChartConfig): BarType[] {
  return Object.entries(chartConfig).map(([key, { color }]) => ({
    key,
    fill: color!,
  }));
}
