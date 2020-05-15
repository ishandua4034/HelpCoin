import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class TestService{

    constructor(private http: HttpClient){}

    getData(){
       return this.http.get('http://localhost:3000/user_list');
    }

    addData(){
        const body={"name":"Virat Kohli", "id": "101"};
        return this.http.post('http://localhost:3000/user_list',body);
    }
}