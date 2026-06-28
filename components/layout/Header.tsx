import { ThemeToggle } from "../ThemeToggle";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  return (
    <div className="flex justify-between py-4">
      <SidebarTrigger />
      <ThemeToggle />
    </div>
  );
}
