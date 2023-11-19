"use client"
import React from "react"
import { useSearchParams } from "next/navigation"

function AboutPage() {
    const searchParams = useSearchParams()
    const person = searchParams.get("")
    return <div>AboutPage</div>
}

export default AboutPage
