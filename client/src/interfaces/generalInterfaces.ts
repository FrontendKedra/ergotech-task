export interface IndexSingature {
  [index: string]: string;
}

export interface ApiResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ListPayload {
  payload: string;
}

export interface BlogListState {
  status: string;
  blog: ApiResponse[];
}

export interface BlogTileProps {
  title: string;
  body: string;
}
