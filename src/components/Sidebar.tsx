function Sidebar() {
    const styleSidebar = "bg-black  w-60 transform transition-all duration-700 text-white flex justify-center"
    const styleSpan = "sm:font-light md:font-medium lg:font-light block m-10  p-2 "
    return (

        <section className={styleSidebar}>
            <div >
                <a href="#" className='no-underline hover:underline'>
                    <span className={styleSpan}>About me</span>
                </a>
                <a href="#" className='no-underline hover:underline'>
                    <span className={styleSpan}>Works</span>
                </a>
                <a href="#" className='no-underline hover:underline'>
                    <span className={styleSpan}>Blog</span>
                </a>
                <a href="#" className='no-underline hover:underline'>
                    <span className={styleSpan}>Gallery</span>
                </a>
                <a href="#" className='no-underline hover:underline'>
                    <span className={styleSpan}>Contacts</span>
                </a>
            </div>
        </section>

    )
}

export default Sidebar