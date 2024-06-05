import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  listTask = [];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpService.get('http://localhost:2024/gettask').subscribe(
      (resp: any[]) => {
        this.listTask = [];
        this.listTask = resp;
      }
    );
  }

  changeStatus(id) {
    this.httpService.post('http://localhost:2024/changeStatus', { id: id }, { responseType: 'text' }).subscribe(
      (resp) => {
        this.getData();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
