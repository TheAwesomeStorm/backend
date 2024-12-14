export abstract class Paginated<T> {
  items: T[];
  page: number;
  size: number;
  total: number;
}
