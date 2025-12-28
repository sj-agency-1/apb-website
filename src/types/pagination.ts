/**
 * Pagination types for Astro
 * These types provide proper typing for getStaticPaths pagination
 */

import type { CollectionEntry } from 'astro:content';

/**
 * Page prop interface for paginated routes
 * @see https://docs.astro.build/en/guides/routing/#pagination
 */
export interface Page<T = unknown> {
  /** Array containing the page's slice of data that you passed to the paginate() function */
  data: T[];
  /** The count of the first item on the page, starting from 0 */
  start: number;
  /** The count of the last item on the page, starting from 0 */
  end: number;
  /** Total number of results */
  total: number;
  /** The current page number, starting from 1 */
  currentPage: number;
  /** Number of items per page (default: 10) */
  size: number;
  /** Number of last page */
  lastPage: number;
  url: {
    /** URL of the current page */
    current: string;
    /** URL of the previous page (if there is one) */
    prev: string | undefined;
    /** URL of the next page (if there is one) */
    next: string | undefined;
    /** URL of the first page (if the current page is not the first page) */
    first: string | undefined;
    /** URL of the last page (if the current page in not the last page) */
    last: string | undefined;
  };
}

/**
 * Options for the paginate function
 */
export interface PaginateOptions<P extends object = object, R extends object = object> {
  /** Number of items per page */
  pageSize?: number;
  /** Additional params to pass to each page */
  params?: P;
  /** Additional props to pass to each page */
  props?: R;
}

/**
 * Paginate function type from getStaticPaths
 */
export type PaginateFunction = <T, P extends object = object, R extends object = object>(
  data: T[],
  options?: PaginateOptions<P, R>
) => Array<{
  params: { page: string | undefined } & P;
  props: { page: Page<T> } & R;
}>;

/**
 * GetStaticPaths context with paginate function
 */
export interface GetStaticPathsContext {
  paginate: PaginateFunction;
}

// =============================================================================
// CONTENT COLLECTION SPECIFIC TYPES
// =============================================================================

/**
 * Props for advantages list page
 */
export interface AdvantagesPageProps {
  page: Page<CollectionEntry<'advantages'>>;
  allTags: string[];
}

/**
 * Props for blog list page
 */
export interface BlogPageProps {
  page: Page<CollectionEntry<'blog'>>;
  allTags: string[];
}

/**
 * Props for tag-filtered list page
 */
export interface TagPageProps<C extends 'advantages' | 'blog'> {
  page: Page<CollectionEntry<C>>;
  allTags: string[];
  tag: string;
}
