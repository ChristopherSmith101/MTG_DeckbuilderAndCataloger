export interface ScryfallError {
  object: 'error';
  code: string;
  status: number;
  details: string;
}