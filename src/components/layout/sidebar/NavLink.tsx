import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
}

export function NavLink({ to, children, ...props }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      className="w-full justify-start"
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </Button>
  );
}
