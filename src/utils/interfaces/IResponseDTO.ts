export interface IResponseDTO {
  code: number;
  message: string;
  data?: any;
  limit?: number;
  offset?: number;
  recordsTotal?: number;
}

export interface IResponseErrorDTO {
  code: number;
  message: string;
}