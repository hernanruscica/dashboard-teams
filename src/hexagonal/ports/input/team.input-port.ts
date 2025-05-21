import type { Team } from '../../domain/team.model';

export interface TeamInputPort {
  getAllTeams: () => Promise<Team[]>;
  getTeamById: (id: string) => Promise<Team | null>;
  toggleTeamSelection: (teamId: string) => Promise<void>;
  getSelectedTeams: () => Promise<Set<string>>;
  getTotal: () => Promise<number>;
}