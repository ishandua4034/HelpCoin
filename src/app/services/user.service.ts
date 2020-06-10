import { Injectable } from "@angular/core";

// LocalStorage Service
@Injectable()
export class UserService{

    setData(key: string, value: string){
        localStorage.setItem(key, value);
    }
    getData(key: string){
        localStorage.getItem(key);
    }
    clearData(){
        localStorage.clear();
    }
}
