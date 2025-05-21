import type { Team } from '../../domain/team.model';

export interface TeamOutputPort {
  loadTeams: () => Promise<Team[]>;
  findTeamById: (id: string) => Promise<Team | null>;
  saveSelection: (selectedIds: Set<string>) => Promise<void>;
  loadSelection: () => Promise<Set<string>>;
}