import { Injectable } from '@angular/core';
import Contact from '../model/contact';
import PhoneBook from '../model/phonebook';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private phonebook: PhoneBook;
  
  constructor() { 
    this.phonebook = new PhoneBook();
  }

  getContacts(): Contact[]{
    return this.phonebook.contacts;
  }

  addContact(contact: Contact) {
    this.phonebook.add(contact);
  }

  deleteContact(contact: Contact) {
    this.phonebook.delete(contact);
  }
}
