import { createContext } from "react";

const userContext = createContext(
    {
        firstName : "SIGN IN",
        email : "default",
        id : "default",
        imageUrl : "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"
    }
)

export default userContext;