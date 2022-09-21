import { SidebarCollectionDashboardFragment as Collection } from 'app/graphql/types';

export type PageTypes =
  | 'search'
  | 'recent'
  | 'archive'
  | 'templates'
  | 'drafts'
  | 'sandboxes'
  | 'legacy-repos'
  | 'open-source-repos'
  | 'v2-repos'
  | 'shared'
  | 'liked'
  | 'always-on'
  | 'discover'
  | 'external';

export type OrderBy = {
  field: string;
  order: 'desc' | 'asc';
};

export type DELETE_ME_COLLECTION = Collection & {
  name: string;
  level: number;
  parent: string;
};

export enum sandboxesTypes {
  DRAFTS = 'DRAFTS',
  TEMPLATES = 'TEMPLATES',
  DELETED = 'DELETED',
  RECENT = 'RECENT',
  SHARED = 'SHARED',
  LIKED = 'LIKED',
  TEMPLATE_HOME = 'TEMPLATE_HOME',
  ALL = 'ALL',
  SEARCH = 'SEARCH',
  REPOS = 'REPOS',
  ALWAYS_ON = 'ALWAYS_ON',
  DISCOVER = 'DISCOVER',
}
