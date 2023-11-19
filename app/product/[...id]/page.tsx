"use client"

import { useSearchParams } from "next/navigation" // Change from "next/navigation"
import classes from "../../styles/page.module.css"
import { Title, List, ThemeIcon, rem, Button, Text, Image } from "@mantine/core"
import { BsCheckLg } from "react-icons/bs"

export default function SearchBar() {
    const searchParams = useSearchParams()

    const product = searchParams.get("product")
    const results = product ? JSON.parse(product) : null
    return (
        <div className={classes.inner}>
            <Image src={results.image} className={classes.image} alt="image" />
            {/* <div>{results.image}</div> */}
            <div className={classes.content}>
                <Title className={classes.title}>{results.name}</Title>
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
        </div>
    )
}
