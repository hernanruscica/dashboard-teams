// src/components/Tabs/Tabs.tsx
import React from 'react';
import clsx from 'clsx';

interface TabsProps {
  teams: { id: string; name: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function Tabs({ teams, activeId, onSelect }: TabsProps) {
  return (
    <div className="flex border-b border-gray-200">
      {teams.map(team => (
        <button
          key={team.id}
          onClick={() => onSelect(team.id)}
          className={clsx(
            'px-4 py-2 font-medium rounded-t-lg border-t-2 border-l-2 border-r-2 border-blue-900',
            activeId === team.id
              ? 'text-blue-600 bg-blue-100'
              : 'text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-100'
          )}
        >
          {team.name}
        </button>
      ))}
    </div>
  );
}
