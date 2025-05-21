import type { Team } from '../../domain/team.model';
import type { TeamOutputPort } from '../../ports/output/team.output-port';

export const createTeamSecondaryAdapter = (initialTeams: Team[]): TeamOutputPort => {
  const loadStoredSelection = (): Set<string> => {
    try {
      const stored = localStorage.getItem('selectedTeams');
      if (!stored) return new Set<string>();
      return new Set(JSON.parse(stored));
    } catch {
      return new Set<string>();
    }
  };

  return {
    loadTeams: async () => initialTeams,
    
    findTeamById: async (id: string) => {
      return initialTeams.find(team => team.id === id) || null;
    },
    
    loadSelection: async () => {
      return loadStoredSelection();
    },
    
    saveSelection: async (ids: Set<string>) => {
      localStorage.setItem('selectedTeams', JSON.stringify(Array.from(ids)));
    }
  };
};