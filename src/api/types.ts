export interface ILogin{
    login: string;
    password: string
}
export interface IRegister {
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string
}

export interface IBuyTicket {
    dayMonth: string,
    cardNumber: string,
    cvv: string
}