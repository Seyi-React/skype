import * as z from "zod";

 export const signUpValidation = z.object({
    username: z.string().min(2,{message:'Too short'}),
    name:z.string().min(2,{message:'Too short'}),
    email:z.string(),
    password:z.string().min(2,{message:'Password must be at least 6 and above characters'})
  })