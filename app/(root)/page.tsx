import AuthGuard from "../components/AuthGuard";
import HomeContent from "../components/ui/home/HomeContent";


export default function Home() {

  return (
    <AuthGuard requireProfileComplete>
       <HomeContent/>
    </AuthGuard>
  );
}