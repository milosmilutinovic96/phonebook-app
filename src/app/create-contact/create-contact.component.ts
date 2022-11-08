import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Contact from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contactName: string = '';
  contactPhone: string = '';

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createContact() {
    if(this.contactName && this.contactPhone) {
      let contact = new Contact(this.contactName, this.contactPhone);
      this.contactService.addContact(contact);
      this.router.navigateByUrl('/contacts');
    } else {
      alert('Polja su prazna! Unesite podatke!');
    }
  }
}
