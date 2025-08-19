import { createFileRoute } from '@tanstack/react-router'
import Stack from '@/components/stack'
import FlipBtn from '@/components/flip-btn'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <div className="w-full px-4 md:px-32 h-max">
      <div className='min-h-[80vh] w-full flex flex-col md:flex-row'>
        <div className='w-full order-2 md:order-1 md:w-2/3 pt-0 md:pt-24 text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl leading-[1.2]'>
            Shading out the <span className='line-through'>complexity</span>, we leave you with only <span className='text-primary'>results.</span>
          </h1>
          <p className='mt-4 text-xl'>We take the complexity out, build on your idea, and scale together.</p>

          <div className='space-x-4 mt-8'>
            <button
              className="group relative px-4 py-3 overflow-hidden overflow-x-hidden border border-black text-white hidden md:inline-flex cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 mix-blend-difference">Who we are?</span>
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-neutral-950 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>

            <button
              className="group relative inline-flex h-12 items-center justify-center bg-neutral-950 px-6 text-white cursor-pointer"
              onClick={() => window.open("https://www.facebook.com/mbrella", "_blank")}
            >
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
          </div>
        </div>
        <div className='w-full order-1 md:order-2 md:w-1/3 flex justify-center py-10'>
          <img className='h-full hidden md:block' src="/assets/hero.svg" alt="" />
          <img className='h-full w-full block md:hidden' src="/assets/sub-complexity.svg" alt="" />
        </div>
      </div>

      <div className='w-full block md:flex bg-neutral-200/30 rounded-lg mt-32'>
        <div className='w-full md:w-1/2 p-4 md:p-16 md:pr-8'>
          <p className='text-primary font-semibold scroll-mt-32 mb-4' id="info">What we do?</p>
          <h1 className='text-3xl md:text-4xl leading-[1.2]'>We build clean websites and web apps that exceed your <span className="text-primary">EXPECTATIONS!</span></h1>
          <p className='text-lg mt-4'>We can create your website with the features you want. Whether it’s for business or personal use, we’ve got you covered.</p>
        </div>
        <div className='w-full md:w-1/2 pl-8 pt-8 md:p-0 md:flex md:items-end md:justify-end'>
          <img className='h-[80%] rounded-t-md' src="/assets/sample-1.png" alt="" />
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row bg-neutral-200/30 rounded-lg mt-4'>
        <div className='w-full order-2 md:order-1 md:w-1/2'>
          <div className='h-[300px] md:h-[500px] overflow-hidden relative'>
            <img className='absolute w-1/2 top-10 left-10 z-10' src="/assets/mobile-1.svg" alt="" />
            <img className='absolute w-1/2 right-0 top-35' src="/assets/mobile-3.svg" alt="" />
          </div>
        </div>
        <div className='w-full order-1 md:order-2 md:w-1/2 space-y-4 p-4 md:p-16 md:pl-8'>
          <p className='text-primary font-semibold scroll-mt-32 mb-4'>We hate limitations.</p>
          <h1 className='text-3xl md:text-4xl leading-[1.2]'>We explore every screen, even <span className='text-primary'>MOBILE!</span></h1>
          <p className='text-lg'>We don't limit you on browser. We can take your vision beyond the desktop and create your very first mobile app.</p>
        </div>
      </div>

      <div className='w-full block md:flex bg-neutral-200/30 rounded-lg mt-4'>
        <div className='w-full md:w-1/2 space-y-4 p-4 md:p-16 md:pl-8'>
          <p className='text-primary font-semibold scroll-mt-32 mb-4'>We shade the limits.</p>
          <h1 className='text-3xl md:text-4xl leading-[1.2]'>We can dive deep and go <span className="text-primary">LOW!</span></h1>
          <p className='text-lg'>From system-level integrations to embedded solutions, we can make it work.</p>
        </div>
        <div className='w-full md:w-1/2 pl-8 pt-8 md:p-0 md:flex md:items-end md:justify-end relative'>
          <img className='h-[80%] left-0 hidden md:block absolute rounded-t-md' src="/assets/sample-4.png" alt="" />
          <img className='h-[70%] relative md:absolute rounded-t-md' src="/assets/sample-3.png" alt="" />
        </div>
      </div>

      <div className='pb-32 space-y-8 mt-32'>
        <div className='space-y-4'>
          <h1 className='text-center text-4xl'>Building your own idea can be hard</h1>
          <p className='text-center text-lg'>That's why we are here, so you can focus on what matters to you.</p>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-3'>
          <div className='border border-b-0 md:border-b md:border-r-0 p-8 space-y-4'>
            <h1 className='font-semibold md:text-medium text-2xl'>Provide your idea</h1>
            <p className='text-lg'>Tell us your story and requirements on how you want it to be. And you can sit back and let the team do the hard work for you.</p>
            <div className='w-full'>
              <img className='w-full' src="/assets/step1.svg" alt="" />
            </div>
          </div>
          <div className='border border-b-0 md:border-b md:border-r-0 p-8 space-y-4'>
            <h1 className='font-semibold md:text-medium text-2xl'>We build on top</h1>
            <p className='text-lg'>We take it from here. With our skills, we build on top of your idea and take complexity out of your plate.</p>
            <div className='w-full'>
              <img className='w-full' src="/assets/step2.svg" alt="" />
            </div>
          </div>
          <div className='border p-8 space-y-4'>
            <h1 className='font-semibold md:text-medium text-2xl'>Scale it together</h1>
            <p className='text-lg'>You are the captain of your idea. You want to change something? You call it!</p>
            <div className='w-full'>
              <img className='w-full' src="/assets/step3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='mb-32'>
        <div className='space-y-2 text-center'>
          <p className='text-primary font-semibold scroll-mt-32 mb-4' id="about">Who we are?</p>
          <h1 className='text-4xl text-center'>And when you don't have an idea, <br />only requirements...</h1>
          <p>We are a group of creative minds, with the same goal of providing solutions for you.</p>
        </div>
        <div className='flex justify-center'>
          <div className='w-max grid grid-cols-1 md:grid-cols-2 mt-8 gap-4'>
            <div className='text-center'>
              <div className='p-8 pb-4 flex flex-col items-center border'>
                <div className='w-[64px] h-auto aspect-square rounded-full border border-dashed border-primary'>
                </div>
                <h1 className='font-semibold text-lg text-primary'>You fill this spot</h1>
                <p className='text-sm'>Team Leader</p>
                <div className='flex h-[32px] gap-4 mt-4'>
                </div>
              </div>
              <FlipBtn
                className='w-full'
                bgStyle='bg-primary'
                onClick={() => window.open("https://www.facebook.com/mbrellacorpo", "_blank")}
              >Tell me your idea</FlipBtn>
            </div>

            <div className='text-center'>
              <div className='p-8 pb-4 flex flex-col items-center border'>
                <div className='w-[64px] h-auto aspect-square rounded-full'>
                  <img src="/bubblegum-512x512.png" alt="" />
                </div>
                <h1 className='font-semibold text-lg'>Dan R.</h1>
                <p className='text-sm'>Founder/Full-Stack Developer</p>
                <div className='flex gap-4 mt-4'>
                  <a href="https://www.facebook.com/dan.rosete.568326" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/facebook.svg" alt="Dan R. facebook" />
                  </a>
                  <a href="https://github.com/breedcrumxx" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/github.svg" alt="Dan R. facebook" />
                  </a>
                </div>
              </div>
              <FlipBtn
                className='w-full bg-black md:bg-white border border-black border-t-0'
                contentStyle='mix-blend-difference'
                bgStyle='bg-neutral-950'
                onClick={() => window.open("https://danrosete.vercel.app", "_blank")}
              >Check me</FlipBtn>
            </div>

            <div className='text-center'>
              <div className='p-8 pb-4 flex flex-col items-center border'>
                <div className='w-[64px] h-auto aspect-square rounded-full'>
                  <img className='object-fit' src="/jake.webp" alt="" />
                </div>
                <h1 className='font-semibold text-lg'>Ivan B.</h1>
                <p className='text-sm'>Founder/Sales and Coms.</p>
                <div className='flex gap-4 mt-4'>
                  <a href="https://www.facebook.com/share/19VxEiyd7P/" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/facebook.svg" alt="Ivan B. facebook" />
                  </a>
                </div>
              </div>
              <FlipBtn
                className='w-full bg-black md:bg-white border border-black border-t-0'
                contentStyle='mix-blend-difference'
                bgStyle='bg-neutral-950'
                onClick={() => window.open("https://www.facebook.com/share/19VxEiyd7P/", "_blank")}
              >Check me</FlipBtn>
            </div>

            <div className='text-center'>
              <div className='p-8 pb-4 flex flex-col items-center border'>
                <div className='w-[64px] h-auto aspect-square rounded-full'>
                  <img className='object-fit' src="/beemo.png" alt="" />
                </div>
                <h1 className='font-semibold text-lg'>Hennryx S.</h1>
                <p className='text-sm'>Founder/Lead Developer</p>
                <div className='flex gap-4 mt-4'>
                  <a href="https://www.facebook.com/jhiro.deguzman.988/" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/facebook.svg" alt="Hennryx S. facebook" />
                  </a>
                  <a href="https://github.com/hennryx" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/github.svg" alt="Hennryx S. facebook" />
                  </a>
                </div>
              </div>
              <FlipBtn
                className='w-full bg-black md:bg-white border border-black border-t-0'
                contentStyle='mix-blend-difference'
                bgStyle='bg-neutral-950'
                onClick={() => window.open("https://hennryx-portfolio.vercel.app/", "_blank")}
              >Click me</FlipBtn>
            </div>

            <div className='text-center'>
              <div className='p-8 pb-4 flex flex-col items-center border'>
                <div className='w-[64px] h-auto aspect-square rounded-full'>
                  <img src="/ice-king.png" alt="" />
                </div>
                <h1 className='font-semibold text-lg'>Homer V.</h1>
                <p className='text-sm'>Full-Stack Developer</p>
                <div className='flex gap-4 mt-4'>
                  <a href="https://www.facebook.com/WeLoveOmiee" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/facebook.svg" alt="Homer V. facebook" />
                  </a>
                  <a href="https://github.com/xomie" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/github.svg" alt="Homer V. github" />
                  </a>
                </div>
              </div>
              <FlipBtn
                className='w-full bg-black md:bg-white border border-black border-t-0'
                contentStyle='mix-blend-difference'
                bgStyle='bg-neutral-950'
                onClick={() => window.open("https://portfolio-jj7p.onrender.com/", "_blank")}
              >Check me</FlipBtn>
            </div>

            <div className='text-center'>
              <div className='p-8 pb-4 flex flex-col items-center border'>
                <div className='w-[64px] h-auto aspect-square rounded-full'>
                  <img className='object-fit' src="/gunter.png" alt="" />
                </div>
                <h1 className='font-semibold text-lg'>Leonel S.</h1>
                <p className='text-sm'>Associate Developer</p>
                <div className='flex gap-4 mt-4'>
                  <a href="https://www.facebook.com/dan.rosete.568326" target="_blank">
                    <img className='h-[32px] w-[32px]' src="/icons/facebook.svg" alt="Leonel S. facebook" />
                  </a>
                  <img className='h-[32px] w-[32px]' src="/icons/github.svg" alt="Ivan B. facebook" />
                </div>
              </div>
              <FlipBtn
                className='w-full bg-black md:bg-white border border-black border-t-0'
                contentStyle='mix-blend-difference'
                bgStyle='bg-neutral-950'
              >Check me</FlipBtn>
            </div>

            <div className='text-center'>
              <div className='p-8 pb-4 flex flex-col items-center border'>
                <div className='w-[64px] h-auto aspect-square rounded-full'>
                  <img className='object-fit' src="marceline.png" alt="" />
                </div>
                <h1 className='font-semibold text-lg'>Paul M.</h1>
                <p className='text-sm'>Associate Developer</p>
                <div className='flex gap-4 mt-4'>
                  <img className='h-[32px] w-[32px]' src="/icons/facebook.svg" alt="Ivan B. facebook" />
                  <img className='h-[32px] w-[32px]' src="/icons/github.svg" alt="Ivan B. facebook" />
                </div>
              </div>
              <FlipBtn
                className='w-full bg-black md:bg-white border border-black border-t-0'
                contentStyle='mix-blend-difference'
                bgStyle='bg-neutral-950'
              >Check me</FlipBtn>
            </div>

          </div>
        </div>
      </div>

      <div className='h-max'>
        <div className='text-center space-y-4'>
          <h1 className='text-5xl leading-[1.2]'>We are trying to cover all of your needs</h1>
          <p className='text-lg'>We offer antidote for your chosen poison. Or you can go custom and contact our sales.</p>
        </div>
        <Stack />
      </div>

      <div className='text-center my-32 space-y-2'>
        <h1 className='text-5xl leading-[1.2]'>If these things stress you out.</h1>
        <p className='text-lg'>Don't worry, we can choose what's best for you, and you can just chill.</p>
      </div>

    </div>
  )
}
