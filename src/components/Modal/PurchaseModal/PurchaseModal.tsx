// src/components/Modal/PurchaseModal.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import type { Team } from '@/shared/types/team';

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  teams: Team[];
}

export function PurchaseModal({ open, onClose, teams }: PurchaseModalProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = teams.reduce(
      (acc, team) => acc + (selected.has(team.id) ? team.price : 0),
      0
    );
    setTotal(sum);
  }, [selected, teams]);

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

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
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
            Selecciona equipos para comprar
          </Dialog.Title>

          <div className="mt-4 space-y-3 max-h-60 overflow-y-auto">
            {teams.map(team => (
              <label
                key={team.id}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selected.has(team.id)}
                    onChange={() => toggle(team.id)}
                    className="mr-2 h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <span className="font-medium">{team.name}</span>
                </div>
                <span className="text-gray-700">${team.price}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${total}</span>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
            <button
              type="button"
              disabled={selected.size === 0}
              className={clsx(
                'px-5 py-2 font-medium rounded-md transition',
                selected.size > 0
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-200 text-blue-400 cursor-not-allowed'
              )}
            >
              Comprar
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
