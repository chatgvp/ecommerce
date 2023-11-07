"use client"
import { useDisclosure } from "@mantine/hooks"
import {
    Anchor,
    AppShell,
    Box,
    Burger,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    Group,
    Menu,
    NavLink,
    Skeleton,
    rem,
    UnstyledButton,
} from "@mantine/core"
import { MantineLogo } from "@mantine/ds"
import { useState } from "react"
import { SiHomeadvisor } from "react-icons/si"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import Link from "next/link"
import { useRouter } from "next/navigation"

const links = [
    { link: "/", label: "Home", icon: <SiHomeadvisor /> },
    {
        link: "/Categories",
        label: "Categories",
        icon: <SiHomeadvisor />,
        links: [
            { link: "/docs", label: "Documentation" },
            { link: "/resources", label: "Resources" },
            { link: "/community", label: "Community" },
            { link: "/blog", label: "Blog" },
        ],
    },
    { link: "/about", label: "About Us", icon: <AiOutlineShoppingCart /> },
    { link: "/cart", label: "Cart", icon: <AiOutlineShoppingCart /> },
]

export default function HeaderComponents() {
    const router = useRouter()
    const [opened, { toggle }] = useDisclosure()
    const [active, setActive] = useState(links[0].link)
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <NavLink label={item.label} leftSection={link.icon} />
        ))
        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal>
                    <Menu.Target>
                        <Flex direction="row" wrap="wrap">
                            <NavLink
                                label={link.label}
                                leftSection={link.icon}
                                rightSection={
                                    <BsChevronDown size="0.7rem" stroke={1.5} />
                                }
                            />
                        </Flex>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }
        return (
            <Flex direction="row" wrap="wrap">
                <NavLink
                    label={link.label}
                    leftSection={link.icon}
                    onClick={() => {
                        router.push(link.link)
                    }}
                />
            </Flex>
        )
    })
    return (
        <Group h="100%" py="md">
            <Group justify="space-between" style={{ flex: 1 }}>
                <MantineLogo size={30} />
                <Group ml="xl" visibleFrom="sm" gap={0}>
                    {items}
                </Group>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
            </Group>
        </Group>
    )
}
