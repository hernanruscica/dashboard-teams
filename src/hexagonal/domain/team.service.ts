import type { TeamInputPort } from '../ports/input/team.input-port';
import type { TeamOutputPort } from '../ports/output/team.output-port';

export const createTeamService = (outputPort: TeamOutputPort): TeamInputPort => {
  const calculateTotal = async (selectedIds: Set<string>) => {
    const teams = await outputPort.loadTeams();
    return teams.reduce(
      (total, team) => total + (selectedIds.has(team.id) ? team.price : 0),
      0
    );
  };

  return {
    getAllTeams: async () => {
      return outputPort.loadTeams();
    },

    getTeamById: async (id: string) => {
      return outputPort.findTeamById(id);
    },

    getSelectedTeams: async () => {
      return outputPort.loadSelection();
    },

    toggleTeamSelection: async (teamId: string) => {
      const currentSelection = await outputPort.loadSelection();
      const newSelection = new Set(currentSelection);
      
      if (newSelection.has(teamId)) {
        newSelection.delete(teamId);
      } else {
        newSelection.add(teamId);
      }
      
      await outputPort.saveSelection(newSelection);
      // No return value needed
    },

    getTotal: async () => {
      const selectedIds = await outputPort.loadSelection();
      return calculateTotal(selectedIds);
    }
  };
};