import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-navy-light py-8 border-t border-navy-lighter">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="text-slate text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Subha Sri Maddela. All rights reserved.
                </div>

                <div className="flex items-center space-x-6">
                    <Link href="https://github.com/subhasri2" target="_blank" className="text-slate hover:text-teal transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/subha-sri-maddela/" target="_blank" className="text-slate hover:text-teal transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:subhasrimaddela1@gmail.com" className="text-slate hover:text-teal transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
