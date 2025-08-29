import { IoClose } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login({ setShowLogin }) {
  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("overlay")) setShowLogin(false);
      }}
      className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-black bg-opacity-20 overlay"
    >
      <div className="flex flex-col gap-3 p-4 bg-white rounded-md w-[400px] shadow-md">
        <div className="flex items-center justify-between pb-2 border-b">
          <h1 className="text-xl">Login</h1>
          <button
            className="p-2 rounded-full hover:bg-red-400"
            onClick={() => setShowLogin(false)}
          >
            <IoClose />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <TextField label="E-mail sau telefon" variant="outlined" />
          <TextField label="Parola" type="password" variant="outlined" />
          <Button
            variant="contained"
            className="text-white h-[46px] transition duration-200 bg-red-500 rounded-md py-2 w-full"
          >
            Conecteaza-te
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
