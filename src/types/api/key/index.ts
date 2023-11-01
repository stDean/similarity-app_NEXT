import { ApiKey } from "@prisma/client";
import { ZodIssue } from "zod";

// this describes what the api request will return as a type
export interface CreateApiData {
  error: string | ZodIssue[] | null
  createdApiKey: ApiKey | null
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null
  success: boolean
}
