import { Component } from '@angular/core';
import { PostsService } from './services/posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-apppppp';

  data:Array<any>

  constructor(private Postsservice: PostsService) {
    this.data = new Array<any>()
  }

  totalLength: any;
page:number = 1;

  getDataFromApi() {
    this.Postsservice.getDataPosts().subscribe((data) => {
      this.data = data;

      this.totalLength = data.length;
    })
  }


}
