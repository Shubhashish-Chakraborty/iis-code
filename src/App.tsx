
import { output8} from "./CodeOutputs";
import { Capsule } from "./components/Capsule";
import CodeBlock from "./components/CodeBlock";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Code } from "./icons/Code";
import { File } from "./icons/File";
import { code8 } from "./PracticalCodes";

export default function App() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <div className="sticky mt-10 md:mt-0 top-0 z-10 bg-black/10 backdrop-blur-md py-1 shadow-md">
                <div className="mt-2 mb-4 gap-x-4 flex justify-center">
                    <Capsule
                        text="Watch Detailed Explanation on My Youtube"
                        variant="cap1"
                        onClick={() => { window.open("https://www.youtube.com/@shubhdevs/playlists"); }}
                        startIcon={<File />}
                    />
                    <Capsule
                        text="Try out Python Code"
                        variant="cap2"
                        onClick={() => { window.open("https://www.programiz.com/python-programming/online-compiler"); }}
                        startIcon={<Code />}
                    />
                </div>
            </div>

            <Intro />

            <div>
                <CodeBlock title="IIS CODE COMING SOON! WITH EXPLANATION!" code={code8} output={output8} />
            </div>


            <div className="text-center">
                <h1 className="text-white text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
                    <span className="bg-gradient-to-r from-emerald-400 via-orange-600 to-blue-400 bg-clip-text text-transparent cursor-pointer">All the best! Regards, Shubhashish ;)</span>
                </h1>
            </div>
        </div>
    )
}
