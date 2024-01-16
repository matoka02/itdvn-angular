import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { };

  URL = 'api/';

  getAllUsers() {
    return this.http.get(this.URL + 'users')
  };

  getUserById(id: number) {
    return this.http.get(this.URL + `users?id=${id}`)
  };

  addUser(payload: any) {
    return this.http.post(this.URL + 'users', payload)
  };

  deleteUser(id: number) {
    return this.http.delete(`${this.URL + 'users'}/${id} `)
  };
}
