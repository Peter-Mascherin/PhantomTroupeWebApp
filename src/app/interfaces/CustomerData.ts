export interface CustomerData{
    _id: string;
    fullName : String;
    email : string;
    style: string;
    orderDetails: string;
    orderStatus: string; //default to pending
    price: Number; //default to 0
    orderDate: string; // date order made
}