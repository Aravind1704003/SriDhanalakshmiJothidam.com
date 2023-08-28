import React from 'react';

const PaymentPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Make Payment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Scan QR Code</h2>
          <p className="text-gray-700">
            Scan the QR code below using your Google Pay app to make a payment.
          </p>
          <div className="mt-4">
            <img src="/gpay_qr_code.png" alt="Google Pay QR Code" className="w-48 mx-auto" />
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          <p className="text-gray-700">
            You can also make a payment by transferring the amount to the following bank account:
          </p>
          <div className="mt-4">
            <p className="font-semibold">Bank: XYZ Bank</p>
            <p>Account Number: 1234567890</p>
            <p>Account Holder: Your Name</p>
            <p>IFSC Code: ABCD123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
