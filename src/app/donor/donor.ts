/*name,ssn,sex,bdate,weight,email,address,telephone*/
export class Donor {
    constructor(
        public name: string,
        public ssn: string,
        public sex: number,
        public bdate: string,
        public weight: number,
        public email: string,
        public address: string,
        public telephone: string
    ){}
}