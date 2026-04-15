export default function Success() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">✅ Order Sent!</h1>

      <p className="mt-4">
        Your order has been sent to Halal Oven.
      </p>

      <p className="mt-2 text-lg font-bold">
        Call to confirm: 7807000202
      </p>
    </div>
  );
}