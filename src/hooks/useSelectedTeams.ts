import { useState, useCallback } from 'react';
import type { Team } from '@/types/team';

export function useSelectedTeams() {
  const [selectedTeams, setSelectedTeams] = useState<Set<string>>(new Set());
  const [total, setTotal] = useState(0);

  const toggleTeam = useCallback((team: Team) => {
    setSelectedTeams(prev => {
      const next = new Set(prev);
      if (next.has(team.id)) {
        next.delete(team.id);
      } else {
        next.add(team.id);
      }
      return next;
    });
  }, []);

  const calculateTotal = useCallback((teams: Team[]) => {
    const sum = teams.reduce(
      (acc, team) => acc + (selectedTeams.has(team.id) ? team.price : 0),
      0
    );
    setTotal(sum);
  }, [selectedTeams]);

  return {
    selectedTeams,
    total,
    toggleTeam,
    calculateTotal
  };
}