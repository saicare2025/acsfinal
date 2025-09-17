import Link from 'next/link'
import React from 'react'
import logo from "../app/assets/logo.webp";
import Image from 'next/image';


const Logo = () => {
  return (
    <div>
       <Link
            href="/"
            className="flex items-center gap-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go to homepage"
          >
            <Image
              src={logo}
              alt="Australian Credit Solutions"
              title='Australian Credit Solutions'
              width={200}
              height={60}
              priority
            />
          </Link>
    </div>
  )
}

export default Logo
