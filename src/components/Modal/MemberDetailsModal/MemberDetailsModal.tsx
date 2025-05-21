"use client";

import React from 'react';
import { Dialog } from '@headlessui/react';
import { FaComments, FaUsers, FaHandPaper, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import type { Member } from '@/types/team';

interface MemberDetailsModalProps {
  open: boolean;
  onClose: () => void;
  member: Member | null;
}

export function MemberDetailsModal({ open, onClose, member }: MemberDetailsModalProps) {
  if (!member) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
          <Dialog.Title className="text-2xl font-bold leading-6 text-gray-900 mb-4">
            Detalles del Miembro
          </Dialog.Title>

          <div className="flex items-start space-x-6">
            <img
              src={member.avatarUrl}
              alt={member.name}
              className="w-32 h-32 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h2 className="text-xl font-bold">{member.name}</h2>
              
              <div className="mt-2 space-y-2">
                <div className="flex items-center text-gray-600">
                  <FaBriefcase className="w-4 h-4 mr-2" />
                  {member.role}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                  {member.location}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Estadísticas de Participación</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FaComments className="w-4 h-4 mr-2 text-blue-600" />
                        <span>Mensajes Enviados</span>
                      </div>
                      <span className="font-bold">{member.messagesSent}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FaUsers className="w-4 h-4 mr-2 text-green-600" />
                        <span>Participación</span>
                      </div>
                      <span className="font-bold">{member.participationPct}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FaHandPaper className="w-4 h-4 mr-2 text-yellow-600" />
                        <span>Asistencia</span>
                      </div>
                      <span className="font-bold">{member.attendancePct}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              Cerrar
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}