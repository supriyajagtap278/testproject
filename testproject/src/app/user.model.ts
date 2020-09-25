export class User {
    constructor(
        public userId:number,
        public firstName:string,
        public lastName:string,
        public email:string,
        public phoneNumber:string,
        public age:number,
        public state:string,
        public country:string,
        public address:string,
        public subscribeToNewsletter:boolean
        ){}
       
}