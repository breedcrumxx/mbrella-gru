import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center py-4 sticky top-0 shadow shadow-b bg-white relative z-100">
      <nav className="w-full px-4 md:px-0 md:w-[1220px] flex justify-center md:justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/"><img className='h-10' src="/icons/mbrellaco-logo.svg" alt="" /></Link>
        </div>

        <div className='hidden md:block space-x-6'>
          <a href="#info">What we do?</a>
          <a href="#about">Who we are?</a>
          <button
            className="group relative inline-flex h-12 items-center justify-center bg-neutral-950 px-6 text-white cursor-pointer"
            onClick={() => window.open("https://www.facebook.com/mbrellacorp", "_blank")}
          >
            <span className="relative z-10">Contact us</span>
            <div className="relative ml-1 h-5 w-5 overflow-hidden">
              <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4 z-10">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-4"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}
