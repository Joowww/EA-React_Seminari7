export interface Event {
  _id: string;         
  name: string;        
  schedule: string;    
  address?: string; 
  participants?: string[];
  joined?: boolean;   
}