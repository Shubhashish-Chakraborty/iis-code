import { code1, code2, code3, code4, code5, code6, code7, code8, code9, code10 } from "./PracticalCodes";
import { output1, output2, output3, output4, output5, output6, output7, output8, output9, output10 } from "./CodeOutputs";
import { Capsule } from "./components/Capsule";
import CodeBlock from "./components/CodeBlock";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Code } from "./icons/Code";
import { File } from "./icons/File";
import ScrollToTop from "./components/ScrollToTop";
import { SideNav } from "./components/SideNav";

export default function App() {
    const navItems = [
        { id: 1, title: "Caesar Cipher Algorithm" },
        { id: 2, title: "Playfair Cipher Algorithm" },
        { id: 3, title: "Hill Cipher Algorithm" },
        { id: 4, title: "RSA Cipher Algorithm" },
        { id: 5, title: "Diffie-Hellman Algorithm" },
        { id: 6, title: "DES Algorithm" },
        { id: 7, title: "MD5 Algorithm" },
        { id: 8, title: "SHA-256 Algorithm" },
        { id: 9, title: "HMAC Algorithm" },
        { id: 10, title: "Web Security Protocols" }
    ];

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <div className="pr-12 md:pr-0">
                <div className="sticky mt-10 md:mt-0 top-0 z-10 bg-black/10 backdrop-blur-md py-1 shadow-md">
                    <div className="mt-2 mb-4 gap-3 flex justify-center flex-col md:flex-row items-center">
                        <div>
                            <Capsule
                                text="Watch Detailed Explanation on My Youtube"
                                variant="cap1"
                                onClick={() => {
                                    window.open("https://www.youtube.com/playlist?list=PLsWLOBFxUwM6d-4WDSW93KCLv08Ofi68H")
                                }}
                                startIcon={<File />}
                            />
                        </div>
                        <div>
                            <Capsule
                                text="Try out Python Code"
                                variant="cap2"
                                onClick={() => { window.open("https://www.programiz.com/python-programming/online-compiler"); }}
                                startIcon={<Code />}
                            />
                        </div>
                    </div>
                </div>

                <Intro />

                <div>
                    <CodeBlock 
                        id={1}
                        title="1. Caesar Cipher Algorithm" 
                        code={code1} 
                        output={output1} 
                        videoUrl="https://youtu.be/Y_xX7AefJ44" 
                    />
                    <CodeBlock 
                        id={2}
                        title="2. Playfair Cipher Algorithm" 
                        code={code2} 
                        output={output2} 
                    />
                    <CodeBlock 
                        id={3}
                        title="3. Hill Cipher Algorithm" 
                        code={code3} 
                        output={output3} 
                    />
                    <CodeBlock 
                        id={4}
                        title="4. RSA Cipher Algorithm" 
                        code={code4} 
                        output={output4} 
                    />
                    <CodeBlock 
                        id={5}
                        title="5. Diffie-Hellman Algorithm" 
                        code={code5} 
                        output={output5} 
                    />
                    <CodeBlock 
                        id={6}
                        title="6. DES Algorithm" 
                        code={code6} 
                        output={output6} 
                    />
                    <CodeBlock 
                        id={7}
                        title="7. MD5 Algorithm" 
                        code={code7} 
                        output={output7} 
                    />
                    <CodeBlock 
                        id={8}
                        title="8. SHA-256 Algorithm" 
                        code={code8} 
                        output={output8} 
                    />
                    <CodeBlock 
                        id={9}
                        title="9. HMAC Algorithm" 
                        code={code9} 
                        output={output9} 
                    />
                    <CodeBlock 
                        id={10}
                        title="10. Web Security Protocols" 
                        code={code10} 
                        output={output10} 
                    />
                </div>

                <div className="text-center pb-20">
                    <h1 className="text-white text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
                        <span className="bg-gradient-to-r from-emerald-400 via-orange-600 to-blue-400 bg-clip-text text-transparent cursor-pointer">
                            All the best! Regards, Shubhashish ;)
                        </span>
                    </h1>
                </div>
            </div>
            
            <ScrollToTop />
            
            {/* Add the SideNav component */}
            <SideNav items={navItems} />
        </div>
    );
}