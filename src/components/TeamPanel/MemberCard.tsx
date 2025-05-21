
import React from 'react';
import { FaComments, FaUsers, FaHandPaper } from 'react-icons/fa';
import type { Member } from '@/types/team';
//import { Insights } from '@/components/Insights/Insights';

interface MemberCardProps {
  member: Member;
  onViewInsights: (member: Member) => void;
}

export function MemberCard({ member, onViewInsights }: MemberCardProps) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 space-x-4">
      {/* Avatar cuadrado */}
      <img
        src={member.avatarUrl}
        alt={member.name}
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
        />

      {/* Contenido: nombre+rol, ubicación, insights y botón */}
      <div className="flex-1">
        {/* Nombre + rol + ubicación */}
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-bold text-lg">{member.name}</h3>
          <span className="text-sm text-gray-600">{member.role}</span>
          <span className="text-sm text-gray-500">· {member.location}</span>
        </div>

        {/* Insights como pills */}
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="flex items-center text-xs font-medium bg-black text-white rounded-full px-3 py-1">
            <FaComments className="w-3 h-3 mr-1" />
            {member.messagesSent} mensajes enviados
          </div>
          <div className="flex items-center text-xs font-medium bg-black text-white rounded-full px-3 py-1">
            <FaUsers className="w-3 h-3 mr-1" />
            {member.participationPct}% de participación
          </div>
          <div className="flex items-center text-xs font-medium bg-black text-white rounded-full px-3 py-1">
            <FaHandPaper className="w-3 h-3 mr-1" />
            {member.attendancePct}% de asistencia
          </div>
        </div>

        {/* Botón Ver Insights */}
        <button
          onClick={() => onViewInsights(member)}
          className="mt-4 inline-block border-2 border-gray-800 text-gray-800 font-medium rounded-md px-4 py-2 hover:bg-gray-100 transition"
        >
          Ver Insights
        </button>
      </div>
    </div>
  );
}
