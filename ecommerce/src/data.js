import { FaShoppingBag, FaRobot, FaCheckCircle } from "react-icons/fa"; 

export const navLinks = [
  { name: "Shop", path: "/shop" },
  { name: "Vendor", path: "/vendor" },
];
export const features = [
  {
    name: "Easy Shopping",
    description:
      "A streamlined, high-performance interface designed for the speed of campus life. Find what you need in seconds.",
    icon: FaShoppingBag, 
  },
  {
    name: "AI Assistant",
    description:
      "Our intelligent curator helps you find the best deals and relevant campus services based on your major and interests.",
    icon: FaRobot, 
  },
  {
    name: "Verified Campus Vendors",
    description:
      "Every seller is identity-verified via campus credentials, ensuring a safe and secure ecosystem for everyone.",
    icon: FaCheckCircle, 
  },
];
export const processFeatures = [
  {
    name: "Join Our community",
    description: "Sign in using your student or faculty Id to access the exclusive editorial marketplace",
    number: "01",
  },
  {
    name: "Browse Products",
    description: "Explore curated gallerves of electronics,fashion,and services from fellow students.",
    number: "02",
  },
  {
    name: "Shop or Sell with ease",
    description: "Complete transactions instantly with our integrated secure payment processing system",
    number:"03",
  },
];
export const verification=[{name:"Safe and Verified", description:"every transaction in backend by our campus-wide guarantee system ",icon: FaCheckCircle} ]
