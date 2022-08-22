import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MatLeaderboardItem {
    rank: number,
    method: string,
    test_score: number,
    val_score: number,
    contact: string,
    references: string,
    params: number,
    hardware: string,
    date: string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MatLeaderboardItem[] = [
  {rank: 1, method: 'Deep AUC', test_score:0.83, val_score:0.83, contact:'abc@gmail.com',
    references:'paper, code', params:3444509, hardware:'Tesla V100', date: new Date("2019-01-14").toDateString()},
    {rank: 2, method: 'CIN', test_score:0.85, val_score:0.82, contact:'abc@gmail.com',
    references:'paper, code', params:344909, hardware:'Tesla V200', date: new Date("2022-11-4").toDateString()},
    {rank: 3, method: 'DGN', test_score:0.89, val_score:0.80, contact:'abc@gmail.com',
    references:'paper, code', params:34509, hardware:'Intel', date: new Date("2020-07-19").toDateString()}

];

/**
 * Data source for the MatLeaderboard view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MatLeaderboardDataSource extends DataSource<MatLeaderboardItem> {
  data: MatLeaderboardItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MatLeaderboardItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MatLeaderboardItem[]): MatLeaderboardItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MatLeaderboardItem[]): MatLeaderboardItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'rank': return compare(+a.rank, +b.rank, isAsc);
        case 'method': return compare(a.method, b.method, isAsc);
        case 'hardware': return compare(a.hardware, b.hardware, isAsc);
        case 'params': return compare(+a.params, +b.params, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
