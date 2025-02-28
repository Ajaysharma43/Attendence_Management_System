const Navbar = () => {
    return(
        <>
        <header>
            <nav className="w-full flex bg-gradient-to-r from-gray-500 to-gray-700 justify-between p-4">
                <section>
                    <h1 className="uppercase text-3xl font-mono text-white pl-4">Logo</h1>
                </section>
                <section className="flex pr-3">
                    <h1 className="pr-3 text-white">Home</h1>
                    <h1 className="pr-3 text-white">About</h1>
                    <h1 className="pr-3 text-white">Contact</h1>
                </section>
            </nav>
        </header>
        </>
    )
}

export default Navbar;