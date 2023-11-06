import { Container } from "@mantine/core"
import React from "react"
import UpperBodyComponent from "./components/UpperBodyComponent"
import HomePage from "./components/BodyComponent"

function BodyComponent() {
    return (
        <>
            <UpperBodyComponent />
            <HomePage />
        </>
    )
}

export default BodyComponent
