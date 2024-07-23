import Header from '@/components/Header'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AppLayout() {
    return (
        <div>
            <main className=' min-h-screen container'>
                {/* Header */}
                <Header/>
                <Outlet/>
            </main>
            {/* footer */}
            <div className=' p-10 text-center bg-gray-800 mt-10'>
                Made with ❤️ by <a href="https://github.com/vivekPatil45" className=' hover:text-gray-500'>Vivek Patil</a> 
            </div>
           

        </div>
    )
}



export default AppLayout
