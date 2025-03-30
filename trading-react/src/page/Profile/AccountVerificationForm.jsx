import React, { useState } from 'react'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "/src/components/ui/dialog";
import { Button } from "/src/components/ui/button";
import { InputOTP,InputOTPGroup,InputOTPSeparator,InputOTPSlot} from '/src/components/ui/input-otp';
import { DialogClose } from '@radix-ui/react-dialog';

const AccountVerificationForm = () => {
    const [value,setValue] = useState("");
    const handleSubmit=()=>{
        console.log(value);
    }
  return (
    <div className='flex justify-center'>
        <div className='space-y-5 mt-10 w-full'>
            <div className='flex justify-between items-center'>
                <p>Email :</p>
                <p>sanghavi.aarnav@gmail.com</p>
                <Dialog>
  <DialogTrigger>
    <Button>
        Send OTP
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Enter OTP</DialogTitle>
      
    </DialogHeader>
    <div className='py-5 flex gap-10 justify-center items-center'>

    <InputOTP 
    value = {value}
    onChange={()=>setValue(value)}
    maxLength={6}>

  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

<DialogClose>
    <Button 
    onClick={handleSubmit}
    className={"w-[10rem]"}>
        submit
    </Button>
</DialogClose>


    </div>
  </DialogContent>
</Dialog>


            </div>
        </div>

    </div>
  )
}

export default AccountVerificationForm