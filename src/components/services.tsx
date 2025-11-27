"use client"

import { Settings, Cloud, Box, Activity, Terminal, Shield, GitMerge, LayoutDashboard } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
    {
        title: "DevOps Engineering",
        icon: Settings,
        items: [
            "CI/CD pipeline design & automation",
            "Legacy migration to modern tools",
            "Infrastructure automation (IaC)"
        ]
    },
    {
        title: "Cloud Architecture",
        icon: Cloud,
        items: [
            "AWS, Azure, GCP setup",
            "Cost optimization & scaling",
            "Hybrid & multi-cloud support"
        ]
    },
    {
        title: "Kubernetes & Containers",
        icon: Box,
        items: [
            "Microservices deployment",
            "Custom Helm charts & autoscaling",
            "Secure image pipeline management"
        ]
    },
    {
        title: "Monitoring & Reliability",
        icon: Activity,
        items: [
            "Observability stacks (Prometheus/ELK)",
            "Alerting & performance dashboards",
            "Disaster recovery automation"
        ]
    },
    {
        title: "Automation & Scripting",
        icon: Terminal,
        items: [
            "Python, Bash, PowerShell scripting",
            "Automated testing & config management",
            "Operational automation"
        ]
    },
    {
        title: "Cloud Security",
        icon: Shield,
        items: [
            "IAM, RBAC, & network hardening",
            "Secrets management",
            "Compliance & policy implementation"
        ]
    },
    {
        title: "Version Control",
        icon: GitMerge,
        items: [
            "Git workflow optimization",
            "Branching strategies & code review",
            "Agile process consulting"
        ]
    },
    {
        title: "Dashboarding",
        icon: LayoutDashboard,
        items: [
            "Streamlit, Power BI, Tableau",
            "Cloud metrics visualization",
            "Automated data pipelines"
        ]
    }
]

export function Services() {
    return (
        <SectionWrapper id="services">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Services I Offer</h2>
                    <p className="text-slate max-w-2xl mx-auto">
                        Specialized engineering services to accelerate your cloud journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-navy-light border-navy-lighter hover:border-teal/50 hover:-translate-y-1 transition-all duration-300 group">
                            <CardHeader className="space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center border border-navy-lighter group-hover:border-teal/30 transition-colors">
                                    <service.icon className="h-6 w-6 text-teal" />
                                </div>
                                <CardTitle className="text-lg text-slate-light">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="text-sm text-slate flex items-start">
                                            <span className="mr-2 text-teal mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
