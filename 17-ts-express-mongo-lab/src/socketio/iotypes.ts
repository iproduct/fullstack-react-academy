export interface ServerToClientEvents {
    chat_message: (message: string) => void;
  }
  
  export interface ClientToServerEvents {
    chat_message: (message: string) => void;
  }
  
  export interface InterServerEvents {
    ping: () => void;
  }
  
  export interface SocketData {
    message: string;
  }