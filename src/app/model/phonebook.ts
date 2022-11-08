import Contact from "./contact";


class PhoneBook {
    contacts: Contact[];

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact: Contact) {
        this.contacts.push(contact);
        this.saveToLocalStorage();
    }

    delete(contact: Contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('phonebook-data', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage(): Contact[] {
        let json = localStorage.getItem('phonebook-data');
        
        if(json === null)
            return [];
        
        let jsonParsed = JSON.parse(json);

        if(jsonParsed.length === 0)
            return [];
        
        let phonebookItems: Contact[] = [];

        for(let i = 0; i < jsonParsed.length; i++) {
            phonebookItems.push(Contact.fromJSON(jsonParsed[i]));
        }

        return phonebookItems;
    }
}

export default PhoneBook;

