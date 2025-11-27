import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    id?: string
    className?: string
    children: React.ReactNode
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12", className)}
            {...props}
        >
            {children}
        </section>
    )
}
