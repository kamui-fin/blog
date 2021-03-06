import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav: React.FC = () => {
    const [isHidden, setHidden] = useState(true);

    const expandMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
        setHidden(!isHidden);
    };

    return (
        <nav>
            <ul className="flex flex-wrap sm:flex-nowrap justify-between py-5 px-6 max-w-7xl m-auto">
                <Link href="/">
                    <div className="cursor-pointer flex flex-shrink-0 flex-row items-start gap-3">
                        <Image src="/logo.svg" height={25} width={25} />
                        <h2 className="font-bold">Linux Zone</h2>
                    </div>
                </Link>
                <button
                    type="button"
                    className="cursor-pointer focus:outline-none sm:hidden"
                    onClick={expandMenu}
                >
                    <div className="bg-white-200 w-5 h-0.5 m-1 rounded" />
                    <div className="bg-white-200 w-5 h-0.5 m-1 rounded" />
                    <div className="bg-white-200 w-5 h-0.5 m-1 rounded" />
                </button>
                <div
                    className={`${
                        isHidden ? "hidden" : ""
                    } sm:flex flex w-full flex-col mt-10 sm:flex-row sm:m-0 justify-end gap-8`}
                >
                    <li>
                        <Link href="/browse">Browse</Link>
                    </li>
                    <li>
                        <Link href="/archive">Archive</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/rss.xml">RSS </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Nav;
