import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

  onDisLove() {
    this.post.loveIts --;
  }

  onLove() {
    this.post.loveIts ++;
  }

}
