import React, { useState, useEffect, useRef } from 'react';
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
    
    // This ref prevents the observer from updating the active state 
    // while the user is actively clicking and smooth-scrolling.
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            // The negative top margin accounts for your fixed header. 
            // It triggers the active state when a section hits the upper third of the screen.
            rootMargin: '-120px 0px -60% 0px',
            threshold: 0,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            // Don't update state if we are currently smooth-scrolling from a click
            if (isScrollingRef.current) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = Number(entry.target.id.replace('section-', ''));
                    setActiveSection(sectionId);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Only query the DOM once on mount, not 60 times a second!
        items.forEach((item) => {
            const section = document.getElementById(`section-${item.id}`);
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, [items]);

    const scrollToSection = (id: number) => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
            // Lock the observer
            isScrollingRef.current = true;
            setActiveSection(id);

            const offset = 100; // Offset for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Unlock the observer after the smooth scroll finishes (~800ms)
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
            }, 800);
        }
    };

    return (
        <div
            className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-500 ease-in-out ${
                isCollapsed ? 'translate-x-48' : 'translate-x-0'
            }`}
        >
            {/* Toggle Button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 bg-red-500 hover:bg-red-600 font-bold text-white p-2 rounded-l-lg cursor-pointer transition-colors duration-300 shadow-lg"
                aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
            >
                {isCollapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>

            {/* Navigation Panel */}
            <div className="bg-black/80 backdrop-blur-md border-l border-emerald-500/30 rounded-l-xl p-4 shadow-2xl w-48 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/50 scrollbar-track-transparent">
                <h3 className="text-white font-semibold mb-4 text-center border-b border-emerald-500/30 pb-2 tracking-wide">
                    Navigate
                </h3>
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ease-out flex items-center ${
                                    activeSection === item.id
                                        ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)] translate-x-1'
                                        : 'text-gray-400 border border-transparent hover:bg-white/10 hover:text-white cursor-pointer'
                                }`}
                            >
                                <span className="text-sm">
                                    {item.id}. {item.title.length > 18 
                                        ? item.title.substring(0, 18) + '...' 
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