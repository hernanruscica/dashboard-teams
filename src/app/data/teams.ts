import type { Team } from '@/types/team';

export const teams: Team[] = [
  {
    id: 'team1',
    name: 'Equipo 01',
    price: 120,
    members: [
      {
        id: 'm1',
        name: 'Ana López',
        role: 'Desarrolladora Frontend',
        location: 'Buenos Aires, AR',
        avatarUrl: '/avatars/ana.jpg',
        messagesSent: 473,
        participationPct: 85,
        attendancePct: 93
      },
      {
        id: 'm2',
        name: 'Carlos Ruiz',
        role: 'UI Designer',
        location: 'Monterrey, MX',
        avatarUrl: '/avatars/carlos.jpg',
        messagesSent: 385,
        participationPct: 78,
        attendancePct: 88
      },
      {
        id: 'm3',
        name: 'Marina Silva',
        role: 'UX Designer',
        location: 'São Paulo, BR',
        avatarUrl: '/avatars/marina.jpg',
        messagesSent: 521,
        participationPct: 92,
        attendancePct: 95
      },
      {
        id: 'm4',
        name: 'Diego Torres',
        role: 'Frontend Developer',
        location: 'Santiago, CL',
        avatarUrl: '/avatars/diego.jpg',
        messagesSent: 412,
        participationPct: 83,
        attendancePct: 90
      }
    ]
  },
  {
    id: 'team2',
    name: 'Equipo 02',
    price: 140,
    members: [
      {
        id: 'm5',
        name: 'Laura Martínez',
        role: 'Backend Developer',
        location: 'Madrid, ES',
        avatarUrl: '/avatars/laura.jpg',
        messagesSent: 623,
        participationPct: 95,
        attendancePct: 97
      },
      {
        id: 'm6',
        name: 'Roberto García',
        role: 'DevOps Engineer',
        location: 'Lima, PE',
        avatarUrl: '/avatars/roberto.jpg',
        messagesSent: 445,
        participationPct: 88,
        attendancePct: 92
      },
      {
        id: 'm7',
        name: 'Patricia Wong',
        role: 'Database Administrator',
        location: 'Bogotá, CO',
        avatarUrl: '/avatars/patricia.jpg',
        messagesSent: 534,
        participationPct: 91,
        attendancePct: 94
      },
      {
        id: 'm8',
        name: 'Jorge Mendoza',
        role: 'Backend Developer',
        location: 'Quito, EC',
        avatarUrl: '/avatars/jorge.jpg',
        messagesSent: 489,
        participationPct: 87,
        attendancePct: 91
      },
      {
        id: 'm9',
        name: 'Valeria Rojas',
        role: 'System Architect',
        location: 'Montevideo, UY',
        avatarUrl: '/avatars/valeria.jpg',
        messagesSent: 567,
        participationPct: 93,
        attendancePct: 96
      }
    ]
  },
  {
    id: 'team3',
    name: 'Equipo 03',
    price: 110,
    members: [
      {
        id: 'm10',
        name: 'Felipe Vargas',
        role: 'QA Lead',
        location: 'Medellín, CO',
        avatarUrl: '/avatars/felipe.jpg',
        messagesSent: 432,
        participationPct: 86,
        attendancePct: 89
      },
      {
        id: 'm11',
        name: 'Carmen Ortiz',
        role: 'Test Automation',
        location: 'Ciudad de México, MX',
        avatarUrl: '/avatars/carmen.jpg',
        messagesSent: 378,
        participationPct: 82,
        attendancePct: 87
      },
      {
        id: 'm12',
        name: 'Andrés Castro',
        role: 'Manual Tester',
        location: 'Caracas, VE',
        avatarUrl: '/avatars/andres.jpg',
        messagesSent: 401,
        participationPct: 84,
        attendancePct: 88
      },
      {
        id: 'm13',
        name: 'Lucía Herrera',
        role: 'Performance Tester',
        location: 'La Paz, BO',
        avatarUrl: '/avatars/lucia.jpg',
        messagesSent: 445,
        participationPct: 89,
        attendancePct: 93
      }
    ]
  }
];
