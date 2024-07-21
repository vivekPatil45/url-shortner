import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

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
                Made with ❤️ by Vivek Patil
            </div>
        </div>
    )
}

export default AppLayout
