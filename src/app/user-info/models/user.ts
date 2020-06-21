export class User {
    id: number;
    name: string;
    email: string;
    imgUrl?: string;
    phone?: string;
    birthdate?: string;
    gender?: string;
    address?: {pin?: string, city?: string, state?: string, street?: string, country?: string};
    bloodGroup?: string;
    about?: string;
    education?: {};
    subDesignation?: string;
    isPrivate?: boolean;
    deparmentId?: number;
    registrationNumber?: string;
    occupation?: string;
    occupationName?: string;
    batch?: string;
    intsaAccount?: string;
    fbAccount?: string;
    tweeterAccount?: string;
    linkedinAccount?: string;

    constructor(
        id: number,
        name: string,
        email: string,
        imgUrl?: string,
        phone?: string,
        birthdate?: string,
        gender?: string,
        address?: {pin: string, city: string, state: string, street: string, country: string},
        bloodGroup?: string,
        about?: string,
        education?: {},
        subDesignation?: string,
        isPrivate?: boolean,
        deparmentId?: number,
        registrationNumber?: string,
        occupation?: string,
        occupationName?: string,
        batch?: string,
        intsaAccount?: string,
        fbAccount?: string,
        tweeterAccount?: string,
        linkedinAccount?: string
        ) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.imgUrl = imgUrl;
            this.phone = phone;
            this.birthdate = birthdate;
            this.gender = gender;
            this.address = address;
            this.bloodGroup = bloodGroup;
            this.about = about;
            this.education = education;
            this.subDesignation = subDesignation;
            this.isPrivate = isPrivate;
            this.deparmentId = deparmentId;
            this.registrationNumber = registrationNumber;
            this.occupation = occupation;
            this.occupationName = occupationName;
            this.batch = batch;
            this.intsaAccount = intsaAccount;
            this.fbAccount = fbAccount;
            this.tweeterAccount = tweeterAccount;
            this.linkedinAccount = linkedinAccount;
        }
}
