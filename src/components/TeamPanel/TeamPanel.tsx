// src/components/TeamPanel/TeamPanel.tsx
import React, { useState } from 'react';
import type { Team, Member } from '@/types/team';
import { teams } from '@/app/data/teams';
import { MemberCard } from '@/components/TeamPanel/MemberCard';
//import { PurchaseModal } from '@/components/Modal/PurchaseModal/PurchaseModal';
import { MemberDetailsModal } from '@/components/Modal/MemberDetailsModal/MemberDetailsModal';
import clsx from 'clsx';

interface TeamPanelProps {
  team: Team;
  onSelectTeam: (teamId: string) => void;
  isSelected: boolean;
}

export function TeamPanel({ team, onSelectTeam, isSelected }: TeamPanelProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleViewMemberDetails = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{team.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {team.members.map(member => (
          <MemberCard 
            key={member.id} 
            member={member} 
            onViewInsights={() => handleViewMemberDetails(member)}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => onSelectTeam(team.id)}
          className={clsx(
            "px-6 py-2 rounded-lg shadow transition",
            isSelected 
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          )}
        >
          {isSelected ? 'Deseleccionar Equipo' : 'Seleccionar Equipo'}
        </button>
      </div>

      <MemberDetailsModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMember(null);
        }}
        member={selectedMember}
      />
    </>
  );
}
