import { useState, useEffect } from 'react';
import type { Team } from '../../domain/team.model';
import { createTeamPrimaryAdapter } from './team.primary-adapter';

export const useTeams = (primaryAdapter: ReturnType<typeof createTeamPrimaryAdapter>) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<Set<string>>(new Set());
  const [total, setTotal] = useState(0);

  // Cargar equipos y selección inicial
  useEffect(() => {
    const initializeData = async () => {
      const [teamsData, selectionInfo] = await Promise.all([
        primaryAdapter.loadTeams(),
        primaryAdapter.getSelectedTeamsInfo()
      ]);
      
      setTeams(teamsData);
      setSelectedTeams(selectionInfo.selectedTeams);
      setTotal(selectionInfo.total);
    };

    initializeData();
  }, [primaryAdapter]);

  const updateSelectedInfo = async () => {
    const { selectedTeams: selected, total: newTotal } = 
      await primaryAdapter.getSelectedTeamsInfo();
    setSelectedTeams(selected);
    setTotal(newTotal);
  };

  const toggleTeam = async (teamId: string) => {
    await primaryAdapter.selectTeam(teamId);
    await updateSelectedInfo();
  };

  return {
    teams,
    selectedTeams,
    total,
    toggleTeam
  };
};