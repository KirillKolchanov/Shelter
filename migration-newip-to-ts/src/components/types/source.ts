export interface Source {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
}

export interface SourcesResponse {
  status: 'ok' | 'error',
  sources: Source[]
  code?: number,
  error?: Error,
}

export type SourcesResponseCallback = (sources: SourcesResponse) => void
