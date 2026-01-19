"use client"

import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Publications() {
    return (
        <SectionWrapper id="publications">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Publications</h2>
                    <p className="text-slate max-w-2xl mx-auto">
                        Research and academic contributions.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Card className="bg-navy border-navy-lighter hover:border-teal/50 transition-all duration-300">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                            <div className="p-3 rounded-lg bg-teal/10 text-teal mt-1">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <CardTitle className="text-xl text-slate-light mb-2">
                                    Smart ATM Security System
                                </CardTitle>
                                <CardDescription className="text-slate text-base leading-relaxed mb-4">
                                    Smart ATM system enhancing security through multi-factor authentication and biometric verification using Python and Raspberry Pi.
                                </CardDescription>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href="https://ieeexplore.ieee.org/document/9835767" target="_blank">
                                        View Publication <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </SectionWrapper>
    )
}
