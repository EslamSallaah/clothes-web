import { type } from "@testing-library/user-event/dist/type";
import Product from "../Product";

// For Add item to cart 
export const AddCart= (Product) =>{
return {
    type: "Add",
    Payload : Product
}
}

// For delete item to cart 
export const delCart= (Product) =>{
    return {
        type: "DELITEM",
        Payload : Product
    }
    }
    