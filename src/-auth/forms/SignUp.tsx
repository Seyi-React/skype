import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import styles from './SignUp.module.css'

const SignUp = () => {
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      name: "",
    },
  });

  return (
    <Form {...form}>
      <div className={styles.account_container}>
        <div className={styles.account}>
          {/* <img src={} alt="" /> */}
          <h2 className={styles.create_account}>
            Create an account
          </h2>
        </div>
      

      <form className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      </div>
    </Form>
  );
};

export default SignUp;
