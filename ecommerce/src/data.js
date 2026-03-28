import { FaShoppingBag, FaRobot, FaCheckCircle } from "react-icons/fa"; 

export const navLinks = [
  { name: "Shop", path: "/" },
  { name: "Vendor", path: "/" },
];

// Features with icons
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