import React from 'react'
import { Form,FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import { DialogClose } from '@radix-ui/react-dialog';

const PaymentDetailsForm = () => {
    const form = useForm({
        resolver: "",
        defaultValues:{
            accountHolderName:"",
            ifsc:"",
            accountNumber:"",
            bankName:""
        }
    })
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    <div className='px-10 py-2'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>

            <FormField
                    control={form.control}
                    name="accountholdername"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Account Holder Name</FormLabel>
                        <FormControl>
                            <Input 
                            className="border w-full border-gray-700 p-5"
                            placeholder="please enter the account holder name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
  )}
/>

            <FormField
                    control={form.control}
                    name="ifsc-code"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>IFSC Code</FormLabel>
                        <FormControl>
                            <Input 
                            className="border w-full border-gray-700 p-5"
                            placeholder="enter the ifsc code" 
                            {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
  )}
/>

<FormField
                    control={form.control}
                    name="accountnumber"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                            <Input 
                            className="border w-full border-gray-700 p-5"
                            placeholder="********5604" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
  )}
/>


<FormField
                    control={form.control}
                    name="confirmAccountNumber"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Confirm Account Number</FormLabel>
                        <FormControl>
                            <Input 
                            className="border w-full border-gray-700 p-5"
                            placeholder="confirm account number" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
  )}
/>


<FormField
                    control={form.control}
                    name="bank name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <FormControl>
                            <Input 
                            className="border w-full border-gray-700 p-5"
                            placeholder="YES Bank" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
  )}
/>
            <DialogClose className='w-full'>
                <Button type="submit" className="w-full py-5">Submit</Button>
            </DialogClose>
           
            </form>

            
        </Form>
    </div>
  )
}

export default PaymentDetailsForm