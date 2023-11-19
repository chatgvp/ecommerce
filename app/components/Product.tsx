import { Paper, Group, Rating, Text, Image } from "@mantine/core"
import Link from "next/link"
import React from "react"
import classes from "../styles/card.module.css"
import { useRouter } from "next/navigation"
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
    const product = {
        id: id,
        name: name,
        price: price,
        image: image,
        rating: rating,
    }
    return (
        <Paper
            withBorder
            radius="md"
            className={classes.card}
            component={Link}
            href={{
                pathname: "/product/view",
                query: {
                    product: JSON.stringify(product),
                },
            }}>
            <Text size="xl" fw={700} mt="md" c="dark">
                {name}
            </Text>
            <Image src={image} className={image} alt={"image"} />
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
