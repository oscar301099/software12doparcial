import { googleSignIn } from "@/modules/auth/services/auth";
import { useRouter } from "next/navigation";

function GoogleSignIn() {
  const router = useRouter();

  async function handleSignIn(e: any) {
    try {
      const authResponse = await googleSignIn();
      if (authResponse) {
        router.push('/app');
      }
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  }

  return (
    <div className="bg-white rounded-md w-1/4 h-1/4 flex justify-center items-center">
      <style>
        {`
          @keyframes animatedBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .bg-animated {
            background: linear-gradient(45deg, #f3c5ad, #b4d8e7, #f3c5ad);
            background-size: 200% 200%;
            animation: animatedBackground 10s ease infinite;
          }
        `}
      </style>
      <div className="bg-animated p-4 rounded-lg">
        Bienvenido al diagramador, por favor regístrate 
        <button
        className="google-sign-in-btn mt-4"
        onClick={handleSignIn}
      >
        Google
      </button>
      </div>
    
    </div>
  );
}

export default GoogleSignIn;
