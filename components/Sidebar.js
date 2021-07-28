
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {

  const router = useRouter();

  return (
    <aside className="bg-pink-500 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black">Woomup</p>
      </div>

      <nav className="mt-5 list-none">
        <li className={router.pathname === "/" ? "bg-pink-900 p-2" : "p-2"}>
          <Link href="/">
            <a className="text-white block">
              LISTADO DE USUARIAS
            </a>
          </Link>
        </li>
        <li className={router.pathname === "/matches" ? "bg-pink-900 p-2" : "p-2"}>
          <Link href="/matches">
            <a className="text-white block">
              MATCHES POR USUARIA
            </a>
          </Link>
        </li>
      </nav>
    </aside>
  );
}
 
export default Sidebar;