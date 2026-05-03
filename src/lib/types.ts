export interface PledgeSignature {
  id: string;
  name: string;
  city: string;
  team_name?: string;
  signed_at: string;
  is_public: boolean;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      pledges: {
        Row: PledgeSignature;
        Insert: Omit<PledgeSignature, 'id' | 'created_at'>;
        Update: Partial<Omit<PledgeSignature, 'id' | 'created_at'>>;
      };
    };
  };
}