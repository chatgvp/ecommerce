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
    Indicator,
    Drawer,
} from "@mantine/core"
import { MantineLogo } from "@mantine/ds"
import { useState } from "react"
import { SiHomeadvisor } from "react-icons/si"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
    {
        link: "/cart",
        label: "Cart",
        icon: <AiOutlineShoppingCart />,
        indicator: true,
    },
]
const cart = 1

export default function HeaderComponents() {
    const router = useRouter()
    const [opened, { toggle }] = useDisclosure()
    const [openedCart, { open, close }] = useDisclosure(false)
    // const [active, setActive] = useState(links[0].link)
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <NavLink
                key={item.label}
                label={item.label}
                leftSection={link.icon}
            />
        ))
        if (link.label === "Cart" && link.indicator) {
            return (
                <Flex direction="row" wrap="wrap" key={link.label}>
                    <NavLink
                        key={link.label}
                        label={link.label}
                        leftSection={
                            <>
                                <Indicator
                                    inline
                                    size={16}
                                    withBorder
                                    color="red"
                                    label="1">
                                    {link.icon}
                                </Indicator>
                            </>
                        }
                        onClick={open}
                    />
                </Flex>
            )
        }
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
            <Flex direction="row" wrap="wrap" key={link.label}>
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
                    opened={openedCart}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
            </Group>
            <Drawer
                opened={openedCart}
                onClose={close}
                size="sm"
                withCloseButton={true}
                position="right">
                Drawer without header, press escape or click on overlay to close
            </Drawer>
        </Group>
    )
}
