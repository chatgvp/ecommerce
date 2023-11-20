"use client"

import { useSearchParams, useRouter } from "next/navigation"
// import classes from "../../styles/page.module.css"
import classes from "@/app/styles/page.module.css"
import {
    Title,
    List,
    ThemeIcon,
    rem,
    Button,
    Text,
    Image,
    Anchor,
    SegmentedControl,
    Group,
    Input,
} from "@mantine/core"
import { useCounter } from "@mantine/hooks"
import { BsArrowLeft } from "react-icons/bs"
import { notifications } from "@mantine/notifications"
export default function SearchBar() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const product = searchParams.get("product")
    const results = product ? JSON.parse(product) : null
    const sizedata =
        results?.sizes.map((size: any) => ({
            label: size,
            value: String(size),
        })) || []
    const [count, handlers] = useCounter(0, { min: 0, max: 10 })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10) || 0
        handlers.set(newValue)
    }

    return (
        <div className={classes.inner}>
            <Image src={results.image} className={classes.image} alt="image" />
            <div className={classes.content}>
                <Anchor onClick={() => router.back()}>
                    <BsArrowLeft /> Get back
                </Anchor>
                <Title order={1}>{results.name}</Title>
                <Text c="dimmed" mt="md">
                    {results.price}
                </Text>
                <Text c="dimmed" mt="md">
                    {results.description}
                </Text>
                <Text mt="md">Size</Text>
                <SegmentedControl data={sizedata} />

                <Text mt="md">Color</Text>
                <SegmentedControl data={results.colors} />
                <Group>
                    <Button onClick={handlers.decrement} variant="default">
                        -
                    </Button>
                    <Input
                        placeholder="Input component"
                        value={count}
                        onChange={handleInputChange}
                    />
                    <Button onClick={handlers.increment} variant="default">
                        +
                    </Button>
                </Group>
                <Button
                    mt={15}
                    onClick={() => console.log("Add to Cart clicked")}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}
