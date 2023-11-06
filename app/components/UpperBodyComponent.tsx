"use client"
import {
    Button,
    Container,
    Flex,
    Group,
    List,
    ThemeIcon,
    Title,
    rem,
    Text,
    Image,
} from "@mantine/core"
import image from "next/image"
import React from "react"
import classes from "../styles/page.module.css"
import image0 from "../../public/shoes/0.png"
import { useMediaQuery } from "@mantine/hooks"
import { Si1Password } from "react-icons/si"
import { BsCheckCircle, BsCheckLg } from "react-icons/bs"

function UpperBodyComponent() {
    const matches = useMediaQuery("(min-width: 56.25em)")
    return (
        <div className={classes.inner}>
            <div className={classes.content}>
                <Title className={classes.title}>
                    Discover <span className={classes.highlight}>shoes </span>
                    online with a premier shoe sanctuary's digital debut.
                </Title>
                <Text c="dimmed" mt="md">
                    Step into a world where every pair is crafted with a perfect
                    blend of comfort and style, transforming your daily stride
                    into a statement
                </Text>

                <List
                    mt={30}
                    spacing="sm"
                    size="sm"
                    icon={
                        <ThemeIcon size={20} radius="xl">
                            {/* <IconCheck
                                    style={{ width: rem(12), height: rem(12) }}
                                    stroke={1.5}
                                /> */}
                            <BsCheckLg
                                style={{ width: rem(12), height: rem(12) }}
                                stroke={1.5}
                            />
                        </ThemeIcon>
                    }>
                    <List.Item>
                        <b>Up to 70% Off Payday Great Deals.</b> – build type
                        Adidas Originals items, Superstar, Stan Smith and many
                        more!
                    </List.Item>
                    <List.Item>
                        <b>Under 1,000 price items - Up to 40% off</b> – all
                        Slides, Apparel, accessories, bags, shoe cleaner and
                        headwear.
                    </List.Item>
                </List>

                <Button
                    radius="xl"
                    size="md"
                    className={classes.control}
                    mt={30}>
                    Get started
                </Button>
            </div>
            {matches ? (
                <Image src={image0.src} className={classes.image} />
            ) : null}
            {/* <Image
                src={image0.src}
                className={classes.image}
                style={{ breakpoint: "sm" }}
            /> */}
        </div>
    )
}

export default UpperBodyComponent
