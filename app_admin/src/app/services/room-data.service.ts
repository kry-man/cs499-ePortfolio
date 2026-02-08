import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Room } from '../models/rooms'
import { User } from '../models/user'
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';
import { AuthDataServiceInterface } from '../auth-data-service.interface';

@Injectable({
  providedIn: 'root',
})

export class RoomDataService implements AuthDataServiceInterface{
  
  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private url = 'http://localhost:3000/api/rooms';

  getRooms() :Observable<Room[]> {
    return this.http.get<Room[]>(this.url);
  }

  addRoom(formData: Room) : Observable<Room>{
    return this.http.post<Room>(this.url, formData);
  }

  getRoom(roomName: string) : Observable<Room[]> {
     console.log('Inside RoomDataService::getRooms');
    return this.http.get<Room[]>(this.url + '/' + roomName);
  }

  updateRoom(formData: Room) : Observable<Room> {
     console.log('Inside RoomDataService::addRooms');
    return this.http.put<Room>(this.url + '/' + formData.name, formData);
  }

  private handleError(error:any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${'http://localhost:3000/api'}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
}

