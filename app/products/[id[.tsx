import { Paper, Group, Rating, Text, Image } from "@mantine/core"
import { useRouter } from "next/router"
import { getProductById } from "../../api/products" // Replace with your data fetching logic
import Link from "next/link"

const ProductDetail = ({ product }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Paper withBorder radius="md">
                <Text size="xl" fw={700} mt="md" c="dark">
                    {product.name}
                </Text>
                <Image src={product.image} alt={product.name} />
                <Text size="sm" mt="sm" c="dimmed">
                    {"₱ " + product.price}
                </Text>
                <Group>
                    <Rating defaultValue={product.rating} readOnly />
                </Group>
                <Link href="/">Go back</Link>
            </Paper>
        </div>
    )
}

export default ProductDetail

export async function getServerSideProps(context) {
    const { params } = context
    const id = params.id
    // Replace this with your data fetching logic based on the id
    const product = await getProductById(id)

    if (!product) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product,
        },
    }
}
