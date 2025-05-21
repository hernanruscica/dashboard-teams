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
    <section className="bg-blue-100 shadow rounded-b-lg border-2 border-blue-900 border-t-0 p-6 min-h-[1800px]">
      <div className="flex flex-col md:flex-row  justify-start items-center gap-4">
        <h2 className="text-2xl text-blue-900 font-bold pt-4 pb-4 ">{`Miembros del ${team.name}`}</h2>
        <button
            onClick={() => onSelectTeam(team.id)}
            className={clsx(
              "px-6 py-2 rounded-lg shadow transition w-fit h-fit mb-4 md:mb-0",
              isSelected 
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            )}
          >
            {isSelected ? 'Deseleccionar Equipo' : 'Seleccionar Equipo'}
          </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {team.members.map(member => (
          <MemberCard 
            key={member.id} 
            member={member} 
            onViewInsights={() => handleViewMemberDetails(member)}
          />
        ))}
      </div>

      {/* <div className="mt-6 flex justify-end">
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
      </div> */}

      <MemberDetailsModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMember(null);
        }}
        member={selectedMember}
      />
    </section>
  );
}
