import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  GetCourse(): object[] {
    var course: object[] = [];
    for (var i = 0; i < this.api.courselist.length; i++) {
      var list = this.api.courselist[i];
      course.push(list);
    }
    return course;
  }
  AddCourse(): void {
    var error = "";
    if (this.api.courselist.length != 0 && this.api.nama != null) {
      var lastid = this.api.courselist[this.api.courselist.length - 1]['id'];
      var obj = {
        'id': lastid + 1,
        'nama': this.api.nama,
        'biaya': this.api.biaya,
        'durasi': this.api.durasi
      };
      this.api.courselist.push(obj);
      console.log(this.api.courselist);
    }
  }
}
