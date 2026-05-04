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
        Insert: {
          name: string;
          city: string;
          team_name?: string | null;
          signed_at: string;
          is_public: boolean;
        };
        Update: Partial<{
          name: string;
          city: string;
          team_name?: string | null;
          signed_at: string;
          is_public: boolean;
        }>;
      };
    };
  };
}