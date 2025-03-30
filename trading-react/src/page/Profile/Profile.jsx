import React from 'react'
import { Card, CardHeader } from '/src/components/ui/card'
import { CardStackPlusIcon } from '@radix-ui/react-icons'
import { CardTitle } from '/src/components/ui/card'
import { CardContent } from '/src/components/ui/card'
import { Badge } from '/src/components/ui/badge'
import { VerifiedIcon } from 'lucide-react'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "/src/components/ui/dialog";
import AccountVerificationForm from "./AccountVerificationForm"
const Profile = () => {
  const handleEnableTwoStepVerification=()=>{
    console.log("two step verification")
  }
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader className="Pb-9">
            <CardTitle>Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='lg:flex gap-32'>
              <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Email : </p>
                  <p className='text-gray-500'>sanghavi.aarnav@gmail.com</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Full Name : </p>
                  <p className='text-gray-500'>Aarnav Sanghavi</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Date of Birth : </p>
                  <p className='text-gray-500'>28/01/2004</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Nationality : </p>
                  <p className='text-gray-500'>Indian</p>
                </div>
              </div>
              <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Email : </p>
                  <p className='text-gray-500'>sanghavi.aarnav@gmail.com</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Full Name : </p>
                  <p className='text-gray-500'>Aarnav Sanghavi</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Date of Birth : </p>
                  <p className='text-gray-500'>28/01/2004</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Nationality : </p>
                  <p className='text-gray-500'>Indian</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='mt-6'>
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className='flex items-center gap-3'>
                <CardTitle>2 step Verification</CardTitle>
                {true ?<Badge className={"space-x-2 text-while bg-green-600"}>
                  <VerifiedIcon/>
                  <span>
                    Enabled
                  </span>
                  </Badge>:
                <Badge className="bg-orange-500"> Disabled </Badge>}


              </div>
            </CardHeader>

            <CardContent>
              <div>
              <Dialog>
  <DialogTrigger>
    <Button>
      Enabled Two Step Verification
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Verify your account?</DialogTitle>
      
    </DialogHeader>

    <AccountVerificationForm handleSubmit = {handleEnableTwoStepVerification}/>
  </DialogContent>
</Dialog>

              </div>
            </CardContent>

          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile