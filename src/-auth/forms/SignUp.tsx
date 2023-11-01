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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpValidation } from "@/lib";
import { z } from "zod";
import styles from "./SignUp.module.css";
import accLogo from "../../assets/Logo no background.webp";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const isLoad = false;
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      name: "",
    },
  });

    // 2. Define a submit handler.
  // async  function onSubmit(values: z.infer<typeof formSchema>) {
  //     // Do something with the form values.
  //     // ✅ This will be type-safe and validated.
  //       // const newUser = await 
  //   }
  

  return (
    <Form {...form} >
      <div className={styles.account_container}>
        <div className={styles.account}>
          <img src={accLogo} alt="" className={styles.logo} />
          <h5 className={styles.skype}>skype</h5>
        </div>

        <h2 className={styles.create_account}>Create an account</h2>
        <p className={styles.details}>To use skype enter your details here</p>

        <form className=" w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel >Name</FormLabel>
                <FormControl>
                  <Input type="text" className={styles.input_v} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-2'>Username</FormLabel>
                <FormControl>
                  <Input type="text" className={styles.input_v} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-4'>Email</FormLabel>
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
                <FormLabel className='mt-2'>Password</FormLabel>
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
          <Button type="submit" className="mt-5">
            {isLoad ? (
              <div className="flex justify-start flex-row items-center gap-2">
                <Loader />
                <p>Loading......</p>
              </div>
            ) : (
              <p>Sign Up</p>
            )}
          </Button>
          <div className={`flex justify-center items-center gap-2 py-2 ${styles.account_type}`}>
            <p className="text-center mt-1">Already have an account?</p>
            <Link to='/sign-in' className="ml-1 mt-1" style={{color:'navy'}}>
               Log in
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SignUp;
