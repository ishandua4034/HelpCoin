export class User {
    provider: string;
    id: string;
    email: string;
    name: string;
    imageUrl: string;
    token?: string;
    idToken?: string;

    constructor(provider: string, id: string, email: string, name: string,
                imageUrl: string, token?: string, idToken?: string) {
      this.provider = provider;
      this.id = id;
      this.email = email;
      this.name = name;
      this. imageUrl = imageUrl;
      this.token = token; // authorization access token
      this.idToken = idToken; // Id Token containing al the infomation of user
    }
  }
