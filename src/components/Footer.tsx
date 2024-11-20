import React from 'react'

const Footer: React.FC = () => {
    return (
        <>
            <div className='mt-10 px-20 fixed bottom-0 w-full border-t py-3 bg-white'>
                <div className='flex justify-between items-center'>
                    <div>
                        <ul className='flex items-center gap-3'>
                            <li className=' decoration-0 no-underline'>About</li>
                            <li
                                className=' decoration-0 no-underline'
                            >
                                Terms
                            </li>
                            <li className=' decoration-0 no-underline'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <p className=' decoration-0 no-underline'></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer