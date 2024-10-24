

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col gap-6 md:flex-row justify-between items-center">
        <div className="flex gap-4 items-center">
        <img src="/logo.svg" alt="comapny_logo" className="w-32"/>
        <span className="text-black font-semibold text-xs md:text-base">
           | Copyright @bgRemovalSpium {new Date().getFullYear()}
        </span>
        </div>

        <div className="flex gap-4 items-center" >
            <img src="/linkedin.svg" alt="linked in" className="w-7"/>
            <img src="/instagram.svg" alt="facebook" className="w-7"/>
            <img src="/github.svg" alt="Github" className="w-7"/>
        </div>
    </div>
  )
}

export default Footer