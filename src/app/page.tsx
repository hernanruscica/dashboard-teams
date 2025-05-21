"use client";
import { useState, useEffect } from 'react';
import { Tabs } from '@/components/Tabs/Tabs';
import { teams as initialTeams } from './data/teams';
import { createTeamSecondaryAdapter } from '@/hexagonal/adapters/secondary/team.secondary-adapter';
import { createTeamService } from '@/hexagonal/domain/team.service';
import { createTeamPrimaryAdapter } from '@/hexagonal/adapters/primary/team.primary-adapter';
import { useTeams } from '@/hexagonal/adapters/primary/useTeams';
import { TeamPanel } from '@/components/TeamPanel/TeamPanel';

// Inicialización de la arquitectura hexagonal
const secondaryAdapter = createTeamSecondaryAdapter(initialTeams);
const teamService = createTeamService(secondaryAdapter);
const primaryAdapter = createTeamPrimaryAdapter(teamService);

export default function Page() {
  const { teams, selectedTeams, total, toggleTeam } = useTeams(primaryAdapter);
  const [activeTeam, setActiveTeam] = useState(teams[0]);

  const handleToggleTeam = (teamId: string) => {
    toggleTeam(teamId);
  };

  // Añadir esta función para obtener los equipos seleccionados con sus datos
  const getSelectedTeamsData = () => {    
     return Array.from(selectedTeams).map(id => {
       const team = teams.find(t => t.id === id);
       return {
         id,
         name: team?.name || 'Equipo no encontrado'
       };
     });
  };

  // 3. Manejador para seleccionar equipo activo
  const handleTeamSelect = (id: string) => {
    const team = teams.find(t => t.id === id);
    if (team) setActiveTeam(team);
  };

  useEffect(() => {
    setActiveTeam(teams[0]);
  }, [teams]);

  console.log('Equipos seleccionados:', getSelectedTeamsData());

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* 1. Tabs con los equipos */}
      <Tabs
        teams={teams.map(t => ({ id: t.id, name: t.name }))}
        activeId={activeTeam?.id}
        onSelect={handleTeamSelect}
      />

      {/* 2. Panel del equipo activo */}
      {activeTeam && (
        <section className="mt-6">
          <TeamPanel 
            team={activeTeam}
            onSelectTeam={handleToggleTeam}
            isSelected={selectedTeams.has(activeTeam.id)}
          />
        </section>
      )}

      {/* Modificar el panel de equipos seleccionados */}
      {selectedTeams.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-bold mb-2">Equipos seleccionados:</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {getSelectedTeamsData().map(team => (
                <span key={team.id} className="bg-black text-white px-3 py-1 rounded-full text-sm">
                  {team.name}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Precio total: ${total}</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

