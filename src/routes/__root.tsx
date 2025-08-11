import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/header'
import Footer from '@/components/footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className='w-full flex justify-center overflow-x-hidden'>
        <div className='w-full md:max-w-[1440px] h-max overflow-x-hidden'>
          <Outlet />
        </div>
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
