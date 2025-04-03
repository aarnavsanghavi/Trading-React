import { useEffect , useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PaymentDetailsForm from "./PaymentDetailsForm";
import { Button } from "@/components/ui/button";
import { getPaymentDetails } from "@/State/Withdrawal/Action";

const PaymentDetails = () => {
  const { withdrawal } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getPaymentDetails({ jwt }));
    }
  }, [dispatch]);

  // Check if payment details exist
  const hasPaymentDetails = withdrawal.paymentDetails && 
                          withdrawal.paymentDetails.accountNumber;

  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
      
      {withdrawal.paymentDetails ? (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{withdrawal.paymentDetails.bankName}</CardTitle>
              <CardDescription>
                *******{withdrawal.paymentDetails.accountNumber.slice(-4)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <p className="w-32">A/C holder</p>
                <p className="text-gray-400">
                  {withdrawal.paymentDetails.accountHolderName}
                </p>
              </div>
              <div className="flex items-center">
                <p className="w-32">IFSC</p>
                <p className="text-gray-400">
                  {withdrawal.paymentDetails.ifsc}
                </p>
              </div>
            </CardContent>
          </Card>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="py-6">Update payment details</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Payment Details</DialogTitle>
              </DialogHeader>
              <PaymentDetailsForm />
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="py-6">Add payment details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment Details</DialogTitle>
            </DialogHeader>
            <PaymentDetailsForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PaymentDetails;