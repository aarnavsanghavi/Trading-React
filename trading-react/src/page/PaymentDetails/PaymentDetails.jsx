// PaymentDetails.jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import PaymentDetailsForm from "./PaymentDetailsForm";
import { Button } from "@/components/ui/button";

const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
      {true ? (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Yes Bank</CardTitle>
              <CardDescription>*********1651</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <p className="w-32">A/C holder</p>
                <p className="text-gray-400">Dummy Account</p>
              </div>
              <div className="flex items-center">
                <p className="w-32">IFSC</p>
                <p className="text-gray-400">YESB000007</p>
              </div>
            </CardContent>
          </Card>

          <Dialog>
            <DialogTrigger>
              <Button className="py-6">Add payment details</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Payment Details</DialogTitle>
              </DialogHeader>
              <PaymentDetailsForm />
            </DialogContent>
          </Dialog>
        </>
      ) : null}
    </div>
  );
};
export default PaymentDetails;