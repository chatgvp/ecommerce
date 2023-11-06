import { Paper, Group, Rating, Text, Image } from "@mantine/core"
import Link from "next/link"
import React from "react"
import classes from "../styles/card.module.css"
interface ProductProps {
    id: number
    name: string
    price: number
    image: string
    rating: number
}

const Product: React.FC<ProductProps> = ({
    id,
    name,
    price,
    image,
    rating,
}) => {
    return (
        <Paper
            withBorder
            radius="md"
            className={classes.card}
            component={Link}
            href={`/about/${id}`}>
            <Text size="xl" fw={700} mt="md" c="dark">
                {name}
            </Text>
            <Image src={image} className={image} />
            <Text size="sm" mt="sm" c="dimmed">
                {"₱ "}
                {price}
            </Text>
            <Group>
                <Rating defaultValue={rating} readOnly />,{" "}
            </Group>
        </Paper>
    )
}

export default Product
