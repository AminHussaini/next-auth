import { useSession, signIn, signOut } from "next-auth/react";
import { destroyCookie } from 'nookies';

export default function Header() {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn('google');
  };

  const handleSignout = (e) => {
    e.preventDefault();
    destroyCookie(null, 'token', { path: '/' });
    signOut();
  };

  return (
    <div className="header">
      {session ? (
        <a href="#" onClick={handleSignout} className="btn-signin">
          <button>Sign out</button>
        </a>
      ) : (<>
        <a onClick={()=>signIn('google')} className="btn-signin">
          <button> Sign in Google</button>
        </a>
        <a onClick={()=>signIn('facebook')} className="btn-signin">
          <button> Sign in Facebook</button>
        </a>  
      </>
      )}
    </div>
  );
}
