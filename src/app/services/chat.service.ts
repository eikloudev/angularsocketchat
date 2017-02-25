import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class ChatService {
    private url = "http://localhost:8000";
    private socket:any;
}
