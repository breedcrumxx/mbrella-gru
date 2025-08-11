import { Link } from "@tanstack/react-router";

export default function Footer() {

  return (
    <footer className="w-full flex items-center justify-center p-0 mb:py-4 sticky top-0 shadow shadow-b text-white">
      <nav className="w-[1220px] border p-8 md:grid grid-cols-5 bg-neutral-950">
        <div className='space-y-4 col-span-3'>
          <h1 className='text-6xl'>Start your idea now!</h1>
          <p className='text-lg'>We shade out complexity the for you.</p>

          <button className="group relative inline-flex items-center justify-center md:bg-neutral-950 border-white md:border px-6 py-3 text-white cursor-pointer bg-primary">
            <span className="relative z-10">Tell me your idea</span>
            <div className="relative ml-1 h-5 w-5 overflow-hidden">
              <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4 z-10">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-4"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button>

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
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="">Contact us</a></p>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold">Socials</h1>
            <div className="space-y-2 text-sm">
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="/">Facebook</a></p>
              <p><a className="hover:underline hover:opacity-100 hover:text-blue-500 opacity-60" href="/">Tiktok</a></p>
            </div>
          </div>
        </div>

        <div className="flex mt-8 md:hidden">
          <div className="space-y-4 w-1/2">
            <h1 className="font-semibold">The Team</h1>
            <div className="space-y-2 text-sm">
              <p><Link to="/" className="opacity-80">Hennryx S.</Link></p>
              <p><Link to="/" className="opacity-80">Ivan B.</Link></p>
              <p><Link to="/" className="opacity-80">Dan R.</Link></p>
              <p><Link to="/" className="opacity-80">Leonel S.</Link></p>
              <p><Link to="/" className="opacity-80">Paul M.</Link></p>
            </div>
          </div>

          <div className="space-y-4 w-1/2">
            <div className="space-y-3">
              <h1 className="font-semibold">Links</h1>
              <div className="space-y-2 text-sm">
                <p><a className="opacity-80" href="#info">What we do?</a></p>
                <p><a className="opacity-80" href="#about">Who we are?</a></p>
                <p><a className="opacity-80" href="">Contact us</a></p>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="font-semibold">Socials</h1>
              <div className="space-y-2 text-sm">
                <p><a className="opacity-80" href="/">Facebook</a></p>
                <p><a className="opacity-80" href="/">Tiktok</a></p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm mt-8 block md:hidden">&copy; {new Date().getFullYear()} MBrella Co</p>
      </nav>
    </footer>
  )
}