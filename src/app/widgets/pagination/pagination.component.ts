import { Component, OnInit } from '@angular/core';

interface TableData {
  count: number;
  data: Array<{
    id: number;
    name: string;
  }>;
}

interface PageConfig {
  pageNo: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  public allData: TableData = {
    count: 0,
    data: [],
  };

  public displayData: TableData = {
    count: 0,
    data: [],
  };

  public skip = 0;
  public rowsPerPage = 10;
  public rowsPerPageConfig = [5, 10, 15, 20];

  public currentPage = 0;
  public inputPage: number | null = null;

  public pageNumbers: PageConfig[] = [];

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    const totalData = 100;
    const data = [];
    for (var i = 1; i <= totalData; i++) {
      data.push({
        id: i,
        name: `Name ${i}`,
      });
    }

    this.allData = {
      count: totalData,
      data,
    };

    this.setPages();
  }

  public setPages(): void {
    this.calculatePageNumbers();
    this.goToPage(1);
  }

  public calculatePageNumbers(): void {
    this.pageNumbers = [];
    const pageCount = Math.ceil(this.allData.count / this.rowsPerPage);
    let skip = 0;
    let count = this.rowsPerPage;
    for (var i = 0; i < pageCount; i++) {
      if (i > 0) {
        skip = skip + this.rowsPerPage;
        count = skip + this.rowsPerPage;
      }
      this.pageNumbers.push({
        pageNo: i + 1,
      });
    }
  }

  public goToPage(pageNumber: number): void {
    this.rowsPerPage = Number(this.rowsPerPage);
    const skip = (pageNumber - 1) * this.rowsPerPage;
    const count = skip + this.rowsPerPage;

    this.currentPage = pageNumber;
    this.displayData = this.getData(skip, count);
  }

  public getData(skip: number, count: number): TableData {
    return {
      count: 100,
      data: this.allData.data.slice(skip, count),
    };
  }

  public previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  public nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  public showPage(): void {
    if (
      typeof this.inputPage === 'number' &&
      this.inputPage > 0 &&
      this.inputPage < this.pageNumbers.length
    ) {
      this.goToPage(this.inputPage);
    }
    this.inputPage = null;
  }
}
