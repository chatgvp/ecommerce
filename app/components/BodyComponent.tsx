import React from "react"
import {
    Divider,
    Paper,
    Rating,
    SimpleGrid,
    Text,
    Image,
    Group,
} from "@mantine/core"
import classes from "../styles/card.module.css"
import image0 from "@/public/shoes/0.png"
import Link from "next/link"
import Product from "./Product"

const productList = [
    {
        id: 1,
        name: "Air Jordan 1",
        price: 1000,
        image: image0.src,
        rating: 1,
        description:
            "Classic high-top basketball shoes with iconic design.Classic high-top basketball shoes with iconic design.Classic high-top basketball shoes with iconic design.Classic high-top basketball shoes with iconic design.Classic high-top basketball shoes with iconic design.Classic high-top basketball shoes with iconic design.Classic high-top basketball shoes with iconic design.",
        sizes: [12, 9, 8],
        colors: ["Red", "Blue", "Green"],
        quantity: 20,
    },
    {
        id: 2,
        name: "Air Jordan 2",
        price: 1200,
        image: image0.src,
        rating: 2,
        description:
            "Mid-top sneakers known for their luxury feel and unique styling.",
        sizes: [11, 10, 9],
        colors: ["White", "Black", "Grey"],
        quantity: 15,
    },
    {
        id: 3,
        name: "Air Jordan 3",
        price: 800,
        image: image0.src,
        rating: 3,
        description:
            "Low-top athletic shoes with a focus on comfort and performance.",
        sizes: [10, 8, 7],
        colors: ["Black", "Yellow", "Blue"],
        quantity: 25,
    },
    {
        id: 4,
        name: "Air Jordan 4",
        price: 800,
        image: image0.src,
        rating: 4,
        description:
            "Versatile sneakers suitable for both casual and sports occasions.",
        sizes: [12, 11, 10],
        colors: ["White", "Red", "Grey"],
        quantity: 18,
    },
    {
        id: 5,
        name: "Air Jordan 5",
        price: 800,
        image: image0.src,
        rating: 5,
        description:
            "High-performance athletic shoes with a focus on agility and speed.",
        sizes: [9, 8, 7],
        colors: ["Blue", "Black", "Yellow"],
        quantity: 30,
    },
]

const products = productList.map((product, index) => (
    <Product
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        rating={product.rating}
        description={product.description}
        sizes={product.sizes}
        colors={product.colors}
        quantity={product.quantity}
    />
))

// <Paper
//     withBorder
//     radius="md"
//     className={classes.card}
//     key={index}
//     component={Link}
//     href={"/about"}>
//     <Text size="xl" fw={700} mt="md" c="dark">
//         {product.name}
//     </Text>
//     <Image src={product.image} className={classes.image} />
//     <Text size="sm" mt="sm" c="dimmed">
//         {"₱ "}
//         {product.price}
//     </Text>
//     <Group>
//         <Rating defaultValue={product.rating} readOnly />,{" "}
//         {/* <Text c="dimmed">{product.rating}/5</Text> */}
//     </Group>
// </Paper>
function BodyComponent() {
    return (
        <div>
            <h1>Feature Products</h1>
            <Divider />
            <SimpleGrid cols={3} spacing="xl" verticalSpacing="xl">
                {products}
            </SimpleGrid>
        </div>
    )
}

export default BodyComponent
