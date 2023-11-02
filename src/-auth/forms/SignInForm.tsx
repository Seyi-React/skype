import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import styles from "./SignIn.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpValidation } from "@/lib";
import { z } from "zod";
import { Link } from "react-router-dom";
import accLogo from "../../assets/Logo no background.webp";



const SignInForm:React.FC = () => {

  
 


  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      email: "",
      password: "",
     
    },
  });
  return (
    <div>
      <Form {...form} >
      <div className={styles.account_container}>
        <div className={styles.account}>
          <img src={accLogo} alt="" className={styles.logo} />
          <h5 className={styles.skype}>skype</h5>
        </div>

        <h2 className={styles.account_now}>Login Now</h2>
        <p className={styles.details}>Insert your details to login here</p>

        <form className=" w-full">
        
         
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' py-6'>Email</FormLabel>
                <FormControl>
                  <Input type="email" className={styles.input_v} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='py-8'>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className={styles.input_v}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-5 w-full">
            Log In
          </Button>
          <div className={`flex justify-center items-center gap-2 py-2 ${styles.account_type}`}>
            <p className="text-center mt-1">New Here?</p>
            <Link to='/sign-up' className="ml-1 mt-1" style={{color:'navy'}}>
               Sign Up
            </Link>
          </div>
        </form>
      </div>
    </Form>
    </div>
  )
}

export default SignInForm