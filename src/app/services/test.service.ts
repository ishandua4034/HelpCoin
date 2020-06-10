import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class TestService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.baseUrl + "/user_list");
  }

  addData() {
    const body = { name: "Virat Kohli", id: "101" };
    return this.http.post(this.baseUrl + "/user_list", body);
  }
}
