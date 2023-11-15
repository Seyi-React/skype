export type INewUser = {
    name : string;
    email : string;
    password : string ;
    username : string;
}

export type ILogout ={
    onYesClick: () => void;
    onNoClick: () => void;
}