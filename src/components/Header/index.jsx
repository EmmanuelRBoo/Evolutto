export function Header({ title }) {
  return (
    <header className='flex fixed items-center pl-20 h-[44px] w-full bg-[#175680]'>
      <h1 className='text-white text-xl font-light'>{title}</h1>
    </header>
  )
}