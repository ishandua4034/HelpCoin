export class SocialUsers{
    constructor(
        public provider: string, 
        public id: string,
        public email: string, 
        public name: string,
        public imageUrl: string,
        public token?: string,
        public idToken?: string){
        }
    
}