import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BiBell, BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { logout } = useAuth();

	useEffect(() => {
		const handleScroll = () => {
		  if (window.scrollY > 0) {
			setIsScrolled(true)
		  } else {
			setIsScrolled(false)
		  }
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
		  window.removeEventListener('scroll', handleScroll)
		}
	  }, [])

	return (
		<header className={`${isScrolled && 'bg-[#141414]'}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<Image
					src='/images/netflix_2015_logo.svg'
					width={100}
					height={100}
					alt='logo'
					className='cursor-pointer object-contain'
				/>
				<ul className='hidden space-x-4 md:flex'>
					<li className='headerLink'>Home</li>
					<li className='headerLink'>TV Shows</li>
					<li className='headerLink'>Movies</li>
					<li className='headerLink'>New & Popular</li>
					<li className='headerLink'>My List</li>
				</ul>
			</div>
			<div className='flex items-center space-x-4 text-sm font-light'>
				<BiSearch className='hidden w-6 h-6 sm:inline' />
				<p className='hidden lg:inline'>Kids</p>
				<BiBell className='w-6 h-6' />
				{/* <Link href='/account'> */}
				<Image
						onClick={logout}
						src='/images/account.png'
						width={30}
						height={30}
						alt='logo'
						className='cursor-pointer rounded'
					/>
				{/* </Link> */}
			</div>
		</header>
	);
};

export default Header;
