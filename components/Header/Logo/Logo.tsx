import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/img/logo.svg" width={160} height={52} />
      </a>
    </Link>
  );
};

export default Logo;
