import { FC } from "react";
import { Section } from "@/components/ui/section";
import { Activity } from "@/types";
import { ChartConfig } from "@/components/ui/chart";
import { BarChart } from "@/components/BarChart";
import { transformChartConfig } from "@/lib/transformChartConfigIntoBars";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

type Props = {
  data: Activity[];
  sectionClassName?: string;
  wrapperClassName?: string;
};

export const WeeklyActivity: FC<Props> = ({ data = [], sectionClassName, wrapperClassName }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(max-width: 992px)" });

  const fontSize = isMobile ? 10 : isTablet ? 12 : 13;
  const barSize = isMobile ? 7 : isTablet || isLarge ? 10 : 16;
  const barGap = isMobile ? 2 : isTablet ? 10 : 12;

  return (
    <Section title="Weekly Activity" className={sectionClassName}>
      <div className={cn("p-6 bg-white rounded-[25px] w-[730px] h-[370px] max-md:w-full max-md:h-[250px]", wrapperClassName)}>
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
