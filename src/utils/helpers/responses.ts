import { IResponseErrorDTO } from "../interfaces/IResponseDTO";

export const errorResponse = (value: string): IResponseErrorDTO => {
  return {
    code: 0,
    message: value
  }
}