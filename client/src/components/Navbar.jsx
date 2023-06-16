import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="flex justify-between p-3 items-center bg-gradient-to-t from-violet-600 via-green-600 to-red-600">
                <h1 className="font-bold text-4xl text-white">AllyForPride</h1>
                <nav className="flex justify-center gap-5 items-center">
                    <a href="#" className="text-xl font-semibold text-white">Sign In</a>
                    <a href="#" className="text-xl font-semibold text-white">Sign Up</a>
                </nav>
            </header>
        </div>
    )
}

export default Navbar