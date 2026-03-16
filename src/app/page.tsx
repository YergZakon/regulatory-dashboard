import StatCard from "@/components/ui/StatCard";
import { formatNumber } from "@/lib/utils";
import globalStats from "../../data/generated/global_stats.json";
import okedSummary from "../../data/generated/oked_summary.json";
import sectionsSummary from "../../data/generated/sections_summary.json";
import OverviewCharts from "./OverviewCharts";

const top10 = okedSummary.slice(0, 10).map((o) => ({
  name: o.name.length > 40 ? o.name.slice(0, 40) + "..." : o.name,
  fullName: o.name,
  value: o.reqs,
  id: o.id,
}));

const sectionBusiness = sectionsSummary
  .map((s) => ({
    name: s.section + " - " + (s.name.length > 30 ? s.name.slice(0, 30) + "..." : s.name),
    value: s.businesses.total,
  }))
  .sort((a, b) => b.value - a.value);

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Анализ регуляторной нагрузки
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Обзор обязательных требований к субъектам предпринимательства РК
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <StatCard
          icon="📋"
          label="Требования"
          value={formatNumber(globalStats.totalRequirements)}
          subtitle={`Медиана: ${formatNumber(globalStats.medianRequirements)}`}
        />
        <StatCard
          icon="🏛️"
          label="Сферы контроля"
          value={formatNumber(globalStats.totalSpheres)}
        />
        <StatCard
          icon="🏭"
          label="ОКЭД"
          value={formatNumber(globalStats.totalOkeds)}
        />
        <StatCard
          icon="👥"
          label="Субъекты бизнеса"
          value={formatNumber(globalStats.totalBusinesses)}
        />
        <StatCard
          icon="📑"
          label="Пары дубликатов"
          value={formatNumber(globalStats.totalDuplicatePairs)}
        />
      </div>

      {/* Charts and table */}
      <OverviewCharts
        top10={top10}
        sectionBusiness={sectionBusiness}
        okedSummary={okedSummary}
      />
    </div>
  );
}
