"use client";

import { useState } from "react";
import HorizontalBar from "@/components/charts/HorizontalBar";
import DonutChart from "@/components/charts/DonutChart";
import { LOAD_TYPE_COLORS } from "@/lib/constants";

const tabs = [
  { key: "sphere", label: "По сферам" },
  { key: "loadType", label: "По видам нагрузки" },
  { key: "authority", label: "По органам" },
] as const;

export default function OkedDetailTabs({
  sphereChart,
  loadTypeChart,
  authorityChart,
}: {
  sphereChart: { name: string; value: number }[];
  loadTypeChart: { name: string; value: number }[];
  authorityChart: { name: string; value: number }[];
}) {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("sphere");

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex gap-1 rounded-lg bg-gray-200 p-1 dark:bg-gray-800">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === t.key
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "sphere" && (
        <HorizontalBar
          data={sphereChart}
          dataKey="value"
          nameKey="name"
          color="#3b82f6"
          height={Math.max(300, sphereChart.length * 38)}
        />
      )}

      {tab === "loadType" && (
        <DonutChart
          data={loadTypeChart}
          dataKey="value"
          nameKey="name"
          colorMap={LOAD_TYPE_COLORS}
          height={400}
        />
      )}

      {tab === "authority" && (
        <HorizontalBar
          data={authorityChart}
          dataKey="value"
          nameKey="name"
          color="#8b5cf6"
          height={Math.max(300, authorityChart.length * 45)}
        />
      )}
    </div>
  );
}
