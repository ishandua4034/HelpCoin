import { Injectable } from '@angular/core';

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
