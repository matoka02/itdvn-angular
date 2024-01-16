import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements InMemoryDbService {
  constructor() { };

  createDb(): {} | Observable<{}> | Promise<{}> {
    let users = [
      { id: 1, userName: 'Max', email: 'user1@gmail.com' },
      { id: 2, userName: 'Pavel', email: 'user2@gmail.com' },
      { id: 3, userName: 'Anna', email: 'user3@gmail.com' },
      { id: 4, userName: 'Daniel', email: 'user4@gmail.com' },
      { id: 5, userName: 'Taras', email: 'user5@gmail.com' },
    ]
    return { users };
  }
}
