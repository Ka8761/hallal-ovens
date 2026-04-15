export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white text-black p-6 rounded-xl">
        <h1 className="text-xl font-bold">Sign Up</h1>
        <input placeholder="Email" className="border p-2 w-full mt-2" />
        <input placeholder="Password" type="password" className="border p-2 w-full mt-2" />
        <button className="bg-black text-white w-full mt-4 p-2">
          Sign up
        </button>
      </div>
    </div>
  );
}