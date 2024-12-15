import { FC } from "react";
import { Section } from "@/shared/ui/section";
import { Activity } from "@/shared/types/financial.types";
import { ChartConfig } from "@/shared/ui/chart";
import { BarChart } from "@/shared/components";
import { transformChartConfig } from "@/shared/utils/transformChartConfigIntoBars";
import { useResponsiveStore } from "@/shared/stores/responsive.store";
import { cn } from "@/shared/utils/cn";

type Props = {
  data: Activity[];
  sectionClassName?: string;
  wrapperClassName?: string;
};

export const WeeklyActivity: FC<Props> = ({ data = [], sectionClassName, wrapperClassName }) => {
  const { isMobile, isTablet, isDesktop } = useResponsiveStore();

  const fontSize = isMobile ? 10 : isTablet ? 12 : 13;
  const barSize = isMobile ? 7 : isTablet || isDesktop ? 10 : 16;
  const barGap = isMobile ? 2 : isTablet ? 10 : 12;

  return (
    <Section title="Weekly Activity" className={sectionClassName}>
      <div
        className={cn(
          "p-6 bg-white rounded-[25px] w-[730px] h-[370px] max-md:w-full max-md:h-[250px]",
          wrapperClassName,
        )}
      >
        <BarChart
          data={data}
          chartConfig={chartConfig}
          bars={transformChartConfig(chartConfig)}
          barSize={barSize}
          barGap={barGap}
          tickFontSize={fontSize}
        />
      </div>
    </Section>
  );
};

const chartConfig = {
  deposit: {
    label: "Deposit",
    color: "#396AFF",
  },
  withdraw: {
    label: "Withdraw",
    color: "#232323",
  },
} satisfies ChartConfig;
