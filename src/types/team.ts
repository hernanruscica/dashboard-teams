export interface Member {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarUrl: string;
  messagesSent: number;
  participationPct: number;
  attendancePct: number;
}


export interface Team {
  id: string;
  name: string;       // “Equipo 1”, “Equipo 2”, …
  members: Member[];
  price: number;
}
