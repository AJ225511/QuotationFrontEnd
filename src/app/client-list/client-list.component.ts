import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';
 
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
 
  clients: Client[];
 
  constructor(private clientService: ClientService) {
  }
 
  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.clients = data;
    });
  }
}