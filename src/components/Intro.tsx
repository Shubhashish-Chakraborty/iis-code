export const Intro = () => {
    return (
        <div className="text-center">
            <h1 className="text-white text-2xl md:text-6xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">Practical Exam Codes? Guess {" "} 
                <span onClick={() => {
                    window.open("https://shubhashish.me")
                }} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent decoration-TextCap2 cursor-pointer hover:underline">who's Back</span> 💀
            </h1>
        </div>
    )
}