import type { TeamInputPort } from '../../ports/input/team.input-port';

export const createTeamPrimaryAdapter = (inputPort: TeamInputPort) => {
  return {
    loadTeams: async () => {
      return inputPort.getAllTeams();
    },
    
    selectTeam: async (teamId: string) => {
      await inputPort.toggleTeamSelection(teamId);
    },
    
    getSelectedTeamsInfo: async () => {
      const selectedTeams = await inputPort.getSelectedTeams();
      const total = await inputPort.getTotal();
      return { selectedTeams, total };
    }
  };
};