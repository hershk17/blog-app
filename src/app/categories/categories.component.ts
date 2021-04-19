import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<any>;

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.postService.getCategories().subscribe((val) => {
      if (val.length > 0) {
        this.categories = val;
      }
    });
  }
}
