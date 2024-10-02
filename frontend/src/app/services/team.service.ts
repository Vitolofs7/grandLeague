import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  endPoint: string = "http://localhost:8080/api/teams";

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.endPoint); 
  }

  delete(id: any) {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  update(id: any, teamData: any) {
    return this.httpClient.put(`${this.endPoint}/${id}`, teamData);
}

  create(team: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("teamName", team.teamName);
    body.append("coach", team.coach);
    body.append("category", team.category);
    body.append("numberOfPlayers", team.numberOfPlayers);

    return this.httpClient.post(this.endPoint, body.toString(), { headers }); 
  }

  getTeamById(id: any) {
    return this.httpClient.get(`${this.endPoint}/${id}`);
  }
}
