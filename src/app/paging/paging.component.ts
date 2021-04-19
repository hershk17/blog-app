import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css'],
})
export class PagingComponent implements OnInit {
  @Input() page: number;

  @Output() newPage = new EventEmitter<number>();

  nextPage(): void {
    this.newPage.emit(this.page + 1);
  }

  prevPage(): void {
    if (this.page > 1) this.newPage.emit(this.page - 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
