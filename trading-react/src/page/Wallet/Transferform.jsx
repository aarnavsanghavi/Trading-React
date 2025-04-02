import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { DialogClose } from '@radix-ui/react-dialog';
import { transferMoney } from '@/State/Wallet/Action';

const Transferform = () => {
  const dispatch = useDispatch();
  const {wallet} = useSelector(store=>store)
  const [formData, setFormData] = React.useState({
    amount: '',
    walletId: '',
    purpose: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    dispatch(transferMoney({
      jwt:localStorage.getItem("jwt")
    }))
    console.log(formData)
  }

  return (
    <div className='pt-10 space-y-5'>
      <div>
        <h1 className='pb-1'>Enter Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          placeholder="$999" 
        />
      </div>
      <div>
        <h1 className='pb-1'>Wallet ID</h1>
        <Input
          name="walletId"  // Changed from "amount" to "walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeholder="ADEEB1234" 
        />
      </div>
      <div>
        <h1 className='pb-1'>Purpose</h1>
        <Input
          name="purpose"  // Changed from "amount" to "purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          placeholder="Gift for a Friend" 
        />
      </div>
      <DialogClose className='w-full'>
        <Button onClick={handleSubmit} className="w-full py-7">
          Submit
        </Button>
      </DialogClose>
    </div>
  )
}

export default Transferform