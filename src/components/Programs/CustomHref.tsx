import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import imagen from "@image/saptiva-t.png";

interface CustomLinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const CustomLink = ({
  href,
  children,
  className,
  ...rest
}: CustomLinkProps) => {
  const isInternalLink = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center ${className}`}
      {...rest}
    >
      <span>{children}</span>
    </Link>
  );
};

export default CustomLink;