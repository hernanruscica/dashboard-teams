"use client";
import { Tabs } from '@/components/Tabs/Tabs';
import { teams } from './data/teams';
import { useTeams } from '@/hooks/useTeams';
import { useSelectedTeams } from '@/hooks/useSelectedTeams';
import { TeamPanel } from '@/components/TeamPanel/TeamPanel';
import { useEffect } from 'react';

export default function Page() {
  const { active, selectById } = useTeams(teams);
  const { selectedTeams, total, toggleTeam, calculateTotal } = useSelectedTeams();

  useEffect(() => {
    calculateTotal(teams);
  }, [selectedTeams, calculateTotal]);

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* 1. Tabs */}
      <Tabs
        teams={teams.map(t => ({ id: t.id, name: t.name }))}
        activeId={active.id}
        onSelect={selectById}
      />

      {/* 2. Panel del equipo seleccionado */}
      <section className="mt-6">
        <TeamPanel 
          team={active}
          onSelectTeam={toggleTeam}
          isSelected={selectedTeams.has(active.id)}
        />
      </section>

      {/* 3. Resumen de selección */}
      {selectedTeams.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-bold mb-2">Equipos seleccionados:</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {Array.from(selectedTeams).map(id => (
                <span key={id} className="bg-black text-white px-3 py-1 rounded-full text-sm">
                  {teams.find(t => t.id === id)?.name}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Precio total: ${total}</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

