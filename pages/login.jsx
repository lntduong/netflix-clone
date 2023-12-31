import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import useAuth from '@/hooks/useAuth';

const Login = () => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
    const [login, setLogin] = useState(false);
    const { signIn, signUp } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
    const onSubmit = async ({email, password}) => {
        if (login) {
            await signIn(email, password)
        } else {
            await signUp(email, password)
        }
    }
	return (
		<div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Login</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Image
				src='/images/login.jpg'
                fill
                alt='login'
				className='-z-10 !hidden opacity-60 sm:!inline object-cover'
			/>
			<Image
				src='/images/netflix_2015_logo.svg'
				width={150}
				height={150}
				alt='logo'
				className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6'
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
			>
				<h1 className='text-4xl font-semibold'>Sign In</h1>
				<div className='space-y-4'>
					<label htmlFor='email' className='inline-block w-full'>
						<input
							type='email'
							placeholder='Email'
							className='input'
							{...register('email', { required: 'Please enter a valid email.' })}
							aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        {errors.email && <p role="alert" className='p-1 text-[13px] font-light text-orange-500'>{errors.email?.message}</p>}
					</label>
					<label htmlFor='password' className='inline-block w-full'>
						<input
							type='password'
							placeholder='Password'
							className='input'
							{...register('password', { required: 'Your password must contain between 4 and 60 characters.', min: 4, max: 60 })}
							aria-invalid={errors.password ? 'true' : 'false'}
                        />
                        {errors.password && <p role="alert" className='p-1 text-[13px] font-light text-orange-500'>{errors.password?.message}</p>}
					</label>
				</div>
				<button onClick={() => setLogin(true)} className='w-full rounded bg-[#e50914] py-3 font-semibold'>
					Sign In
				</button>
				<div className='text-[gray]'>
					New to Netflix?{' '}
					<button onClick={() => setLogin(false)} type='submit' className='text-white hover:underline'>
						Sign up now
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
