import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document.module'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api";

  getDocuments(): Observable<Document[]>{
    return this.http.get<Document[]>(this.url+'/Documents');
  }

  addDocument(document:Document){
    return this.http.post<any>(this.url+'/Documents',document);
  }
  
  getDocumentById(id:number){
    return this.http.get<Document>(this.url+'/Documents/'+id);
  }

  deleteDocumentById(document:Document){
    return this.http.delete<Document>(this.url+'/Documents/'+document.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
}
