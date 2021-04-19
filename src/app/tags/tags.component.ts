import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Array<string>;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getTags().subscribe((val) => {
      if(val.length > 0) {
        this.tags = val;
      }
    });
  }

}
