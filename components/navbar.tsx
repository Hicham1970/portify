"use client";

import { motion } from 'framer-motion';
import MenuItems from './menu-items';
import { useState } from 'react';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

const navItems = [
    { name: "Projects", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];
const socialLinks = {
    github: "https://github.com/Hicham1970",
    linkedin: "https://www.linkedin.com/in/hicham-garroum-46257825/",
};




export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 bg-background/90 backdrop-blur-2xl transition-all duration-300 ease-out">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} className='flex items-center gap-3 cursor-pointer group'>
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                            <div className='absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]' />
                            <div className='absolute inset-[2px] bg-background rounded-full items-center justify-center'>
                                <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                                    HG

                                </span>

                            </div>
                        </div>
                        <span className='font-semibold text-content/90 group-hover:text-primary transition-colors'>
                            Hicham Garoum
                        </span>

                    </motion.div>
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6 bg-background/80 py-2 rounded-full border border-white/5 shadow-lg shadow-primary/5 ">
                            {
                                navItems.map((item, i) => (
                                    <MenuItems key={item.href} index={i} href={item.href} >
                                        {item.name}
                                    </MenuItems>
                                ))
                            }

                        </div>
                        <div className='h-6 w-px bg-white/10 mx-2'></div>
                        <div className='flex gap-4'>
                            <a className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group" href={socialLinks.github}>
                                <GithubIcon className="w-5 h-5 text-content/80  group-hover:text-primary transition-colors" />
                            </a>
                            <a className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group" href={socialLinks.linkedin}>
                                <LinkedInIcon className="w-5 h-5 text-content/80  group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>
                    <button className="md=hidden p-2 rounded-lg hover:bg-primary/10 transition-colors group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <XMarkIcon className="w-6 h-6 text-content/80  group-hover:text-primary transition-colors" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-content/60" />
                        )}

                    </button>
                </div>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-4 bg-background/90 backdrop-blur-2xl rounded-lg p-4 shadow-lg shadow-primary/5">
                        <div className="flex flex-col gap-4">
                            {
                                navItems.map((item) => (
                                    <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block  text-content/80 hover:text-primary hover:bg-white/5  transition-colors rounded-lg px-4 py-2">
                                        {item.name}
                                    </a>
                                ))
                            }
                            <div className="pt-4 border-t border-white/5 flex gap-4">
                                <a className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group" href={socialLinks.github}>
                                    <GithubIcon className="w-5 h-5 text-content/80  group-hover:text-primary transition-colors" />
                                </a>
                                <a className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group" href={socialLinks.linkedin}>
                                    <LinkedInIcon className="w-5 h-5 text-content/80  group-hover:text-primary transition-colors" />
                                </a>

                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    )
}



