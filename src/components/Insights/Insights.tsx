import React from 'react';
import { FaComments, FaChartPie, FaUserCheck } from 'react-icons/fa';

interface Insight {
  icon: React.ReactNode;
  label: string;
}

interface InsightsProps {
  messagesSent: number;
  participationPct: number;
  attendancePct: number;
}

export function Insights({ messagesSent, participationPct, attendancePct }: InsightsProps) {
  const items: Insight[] = [
    { icon: <FaComments />, label: `${messagesSent} mensajes` },
    { icon: <FaChartPie />, label: `${participationPct}% participación` },
    { icon: <FaUserCheck />, label: `${attendancePct}% asistencia` },
  ];

  return (
    <div className="mt-4 space-y-2 w-full">
      {items.map((it, idx) => (
        <div key={idx} className="flex items-center text-sm text-gray-600">
          <span className="w-4 h-4 mr-1 text-blue-500">{it.icon}</span>
          {it.label}
        </div>
      ))}
    </div>
  );
}
