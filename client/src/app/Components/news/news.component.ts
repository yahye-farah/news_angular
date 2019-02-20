import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../Services/news.service";
@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  news: {}[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.news = this.newsService.getNews();
  }
}
