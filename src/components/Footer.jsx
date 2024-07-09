import React from 'react'
import {FaGithubSquare  , FaTwitterSquare} from 'react-icons/fa'
export function Footer() {

    return (
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
            <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>J.Doe</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                    <a href="https://github.com/Rajan9089"><FaGithubSquare/></a>
                    <a href="https://x.com/kumar9089rjn"><FaTwitterSquare/></a>
                </div>
            </div>

            <p className='text-gray-400 '>@ 2024 J.Doe</p>
        </div>
    )
}
