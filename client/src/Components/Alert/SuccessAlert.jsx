import { Alert } from '@material-tailwind/react'
import React from 'react'
import { IoIosNotifications } from 'react-icons/io'

const SuccessAlert = ({ showSuccessModal, setShowSuccessModal }) => {
  return (
    <div className='pt-2'>
      <Alert
        className="border rounded-sm rounded-r-xl"
        show={showSuccessModal}
        icon={<IoIosNotifications className='h-6 w-6'/>}
        color="green"
        dismissible={{
          onClose: () => setShowSuccessModal(false)
        }}
      >
        Form Submitted Successfully.
      </Alert>
    </div>
  )
}

export default SuccessAlert
