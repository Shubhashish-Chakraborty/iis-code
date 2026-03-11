import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SideNavProps {
    items: {
        id: number;
        title: string;
    }[];
}

export const SideNav: React.FC<SideNavProps> = ({ items }) => {
    const [activeSection, setActiveSection] = useState(1);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => 
                document.getElementById(`section-${item.id}`)
            );

            const scrollPosition = window.scrollY + 150; // Offset for better UX

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(items[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    const scrollToSection = (id: number) => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
            const offset = 100; // Offset for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div
            className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
                isCollapsed ? 'translate-x-48' : 'translate-x-0'
            }`}
        >
            {/* Toggle Button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 bg-gradient-to-l bg-red-500 font-bold text-white p-2 rounded-l-lg hover:bg-red-700 cursor-pointer transition-all duration-200 shadow-lg"
                aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
            >
                {isCollapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>

            {/* Navigation Panel */}
            <div className="bg-black/80 backdrop-blur-md border-l border-emerald-500/30 rounded-l-xl p-4 shadow-2xl w-48 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/50 scrollbar-track-transparent">
                <h3 className="text-white font-semibold mb-4 text-center border-b border-emerald-500/30 pb-2">
                    Navigate
                </h3>
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r bg-blue-700 cursor-pointer text-white font-bold shadow-lg scale-105'
                                        : 'text-gray-300 border-1 border-white hover:bg-white/10 cursor-pointer hover:text-white'
                                }`}
                            >
                                <span className="text-sm font-medium">
                                    {item.id}. {item.title.length > 20 
                                        ? item.title.substring(0, 20) + '...' 
                                        : item.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};