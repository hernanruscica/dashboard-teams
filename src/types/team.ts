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
  name: string;       
  members: Member[];
  price: number;
}
