import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatLeaderboardDataSource, MatLeaderboardItem } from './mat-leaderboard-datasource';

@Component({
  selector: 'app-mat-leaderboard',
  templateUrl: './mat-leaderboard.component.html',
  styleUrls: ['./mat-leaderboard.component.scss']
})
export class MatLeaderboardComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MatLeaderboardItem>;
  dataSource: MatLeaderboardDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['rank', 'method', 'test_score','val_score','contact','references','params','hardware','date'];

  constructor() {
    this.dataSource = new MatLeaderboardDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
