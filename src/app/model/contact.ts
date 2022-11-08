

class Contact {
    id: string;
    name: string;
    phone: string;

    constructor(name: string, phone: string) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.phone = phone;
    }

    static fromJSON(json: any): Contact {
        let contact = new Contact(json.name, json.phone);
        contact.id = json.id;
        return contact;
    }
}

export default Contact;