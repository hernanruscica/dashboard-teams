
import { useState } from 'react';
import type { Team } from '@/shared/types/team';

export function useTeams(allTeams: Team[]) {
  const [active, setActive] = useState<Team>(allTeams[0]);

  function selectById(id: string) {
    const found = allTeams.find(t => t.id === id);
    if (found) setActive(found);
  }

  return { active, selectById };
}
