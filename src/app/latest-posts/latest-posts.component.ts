import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css'],
})
export class LatestPostsComponent implements OnInit {
  posts: Array<BlogPost>;

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts(1, null, null).subscribe((val) => {
      this.posts = val.slice(0, 3);
    });
  }
}
