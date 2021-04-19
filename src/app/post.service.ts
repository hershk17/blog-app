import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

const perPage = 6;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly ROOT_URL = 'https://sleepy-beyond-29646.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getPosts(page, tag, category): Observable<BlogPost[]> {
    let params = new HttpParams();

    params = params.append('page', page);
    params = params.append('perPage', perPage.toString());
    if (tag != null) params = params.append('tag', tag);
    if (category != null) params = params.append('category', category);

    return this.http.get<BlogPost[]>(`${this.ROOT_URL}/posts`, {params: params});
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.ROOT_URL}/posts/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get<Array<any>>(`${this.ROOT_URL}/categories`);
  }

  getTags(): Observable<string[]> {
    return this.http.get<Array<string>>(`${this.ROOT_URL}/tags`);
  }
}
