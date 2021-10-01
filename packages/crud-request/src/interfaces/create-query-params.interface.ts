import {
  QueryFields,
  QueryFilter,
  QueryFilterArr,
  QueryJoin,
  QueryJoinArr,
  QuerySort,
  QuerySortArr,
} from '../types';

export interface CreateQueryParams {
  fields?: QueryFields;
  search?: string;
  filter?: QueryFilter | QueryFilterArr | Array<QueryFilter | QueryFilterArr>;
  or?: QueryFilter | QueryFilterArr | Array<QueryFilter | QueryFilterArr>;
  join?: QueryJoin | QueryJoinArr | Array<QueryJoin | QueryJoinArr>;
  sort?: QuerySort | QuerySortArr | Array<QuerySort | QuerySortArr>;
  limit?: number;
  offset?: number;
  page?: number;
  resetCache?: boolean;
  includeDeleted?: number;
}
