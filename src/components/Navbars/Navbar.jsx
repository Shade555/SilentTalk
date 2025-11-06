import { checkUser } from '@/lib/checkUser'
import ClientNavbar from './ClientNavbar.jsx'

const Navbar = async () => {
  await checkUser();
  return <ClientNavbar />;
}
export default Navbar
