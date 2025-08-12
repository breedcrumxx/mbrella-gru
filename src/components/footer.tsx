import { Link } from "@tanstack/react-router";
import FlipBtn from "./flip-btn";

export default function Footer() {
  // TODO: temporary link
  return (
    <footer className="w-full flex items-center justify-center p-0 mb:py-4 sticky top-0 shadow shadow-b text-white">
      <nav className="w-[1220px] border p-8 md:grid grid-cols-5 bg-neutral-950">
        <div className='space-y-4 col-span-3'>
          <h1 className='text-6xl'>Start your idea now!</h1>
          <p className='text-lg'>We shade out complexity for you.</p>

          <FlipBtn
            className='md:bg-neutral-950 bg-primary border-white md:border text-white'
            bgStyle='bg-primary'
            onClick={() => window.open("https://www.facebook.com/mbrellacorpo", "_blank")}
          >Tell me your idea</FlipBtn>
          <p className="opacity-60 text-sm">+63 912 3922 666 | mbrellaco703@gmail.com</p>

          <p className="text-sm mt-8 hidden md:block">&copy; {new Date().getFullYear()} MBrella Co</p>
        </div>

        <div className="space-y-4 hidden md:block">
          <h1 className="font-semibold">The Team</h1>
          <div className="space-y-2 text-sm">
            <p><Link to="/" className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60">Hennryx S.</Link></p>
            <p><Link to="/" className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60">Ivan B.</Link></p>
            <p><Link to="/" className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60">Dan R.</Link></p>
            <p><Link to="/" className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60">Leonel S.</Link></p>
            <p><Link to="/" className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60">Paul M.</Link></p>
          </div>
        </div>
        <div className="space-y-4 hidden md:block">
          <div className="space-y-3">
            <h1 className="font-semibold">Links</h1>
            <div className="space-y-2 text-sm">
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="#info">What we do?</a></p>
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="#about">Who we are?</a></p>
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="https://www.facebook.com/mbrellacorpo" target="_blank">Contact us</a></p>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold">Socials</h1>
            <div className="space-y-2 text-sm">
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="https://www.facebook.com/mbrellacorpo" target="_blank">Facebook</a></p>
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="https://www.tiktok.com/@mbrella.co?_t=ZS-8yohdfd0kNj&_r=1" target="_blank">Tiktok</a></p>
            </div>
          </div>
        </div>

        <div className="flex mt-8 md:hidden">
          <div className="space-y-4 w-1/2">
            <h1 className="font-semibold">The Team</h1>
            <div className="space-y-2 text-sm">
              <p><a href="https://www.facebook.com/share/19VxEiyd7P/" target="_blank" className="opacity-80">Ivan B.</a></p>
              <p><a href="https://hennryx-portfolio.vercel.app/" target="_blank" className="opacity-80">Hennryx S.</a></p>
              <p><a href="https://danrosete.vercel.app" target="_blank" className="opacity-80">Dan R.</a></p>
              <p><a href="/" className="opacity-80">Leonel S.</a></p>
              <p><a href="/" className="opacity-80">Paul M.</a></p>
            </div>
          </div>

          <div className="space-y-4 w-1/2">
            <div className="space-y-3">
              <h1 className="font-semibold">Links</h1>
              <div className="space-y-2 text-sm">
                <p><a className="opacity-80" href="#info">What we do?</a></p>
                <p><a className="opacity-80" href="#about">Who we are?</a></p>
                <p><a className="opacity-80" href="https://www.facebook.com/mbrellacorpo" target="_blank">Contact us</a></p>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="font-semibold">Socials</h1>
              <div className="space-y-2 text-sm">
                <p><a className="opacity-80" href="https://www.facebook.com/mbrellacorpo" target="_blank">Facebook</a></p>
                <p><a className="opacity-80" href="https://www.tiktok.com/@mbrella.co?_t=ZS-8yohdfd0kNj&_r=1" target="_blank">Tiktok</a></p>
                <p className="opacity-80">mbrellaco703@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm mt-8 block md:hidden">&copy; {new Date().getFullYear()} MBrella Co</p>
      </nav>
    </footer>
  )
}