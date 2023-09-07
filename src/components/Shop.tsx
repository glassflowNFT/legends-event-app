import { useState, useEffect } from 'react';
import NavPopover from './NavPopover';
import Navbar from './Navbar';
import {
    Box,
    Grid,
    Heading,
    Text,
    Stack,
    Container,
    Button,
    Flex,
    Image,
    Input,
    Icon,
    useColorMode,
    SimpleGrid,
    Select,
    Divider,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    total: number;
}

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartState>({ items: [], total: 0 });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
            async function fetchProducts() {
            const response = await fetch('/products.json');
            const products = await response.json();
            setProducts(products);
        }

        fetchProducts();
    }, []);

    const handleAddToCart = (product: Product) => {
        const existingCartItem = cart.items.find((item) => item.product.id === product.id);
        if (existingCartItem) {
            setCart({
                ...cart,
                items: cart.items.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                ),
                total: cart.total + product.price,
            });
        } else {
            setCart({
                ...cart,
                items: [...cart.items, { product: product, quantity: 1 }],
                total: cart.total + product.price,
            });
        }
    };

    const handleRemoveFromCart = (product: Product) => {
        const existingCartItem = cart.items.find((item) => item.product.id === product.id);
        if (existingCartItem) {
            if (existingCartItem.quantity === 1) {
                setCart({
                    ...cart,
                    items: cart.items.filter((item) => item.product.id !== product.id),
                    total: cart.total - existingCartItem.product.price,
                });
            } else {
                setCart({
                    ...cart,
                    items: cart.items.map((item) =>
                        item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
                    ),
                    total: cart.total - existingCartItem.product.price,
                });
            }
        }
    };

    const handleClearCart = () => {
        setCart({
            ...cart,
            items: [],
            total: 0,
        });
    };

    const handleCheckout = () => {
        {
        }
      };

    return (
        <>
            <NavPopover />
            <Navbar />
            <Box bg="#222222" py={10}>
                <Container maxW="container.xl">
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 5, md: 10 }}>
                        <Box flex={1}>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                                {products.map((product) => (
                                    <Box key={product.id} bg="white" borderRadius="lg" boxShadow="md" overflow="hidden">
                                        <Image src={product.image} alt={product.name} w="100%" h={64} objectFit="cover" />
                                        <Box p={5}>
                                            <Heading as="h2" size="md" mb={2}>
                                                {product.name}
                                            </Heading>
                                            <Text fontWeight="bold" mb={2}>
                                                ${product.price.toFixed(2)}
                                            </Text>
                                            <Text mb={2}>{product.description}</Text>
                                            <Button
                                                colorScheme="teal"
                                                size="sm"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                Add to cart
                                            </Button>
                                        </Box>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </Box>
                        <Box w={{ base: '100%', md: '30%' }}>
                            <Box bg="white" borderRadius="lg" boxShadow="md" p={5}>
                                <Heading as="h2" size="lg" mb={3}>
                                    Cart
                                </Heading>
                                {cart.items.length === 0 ? (
                                    <Text>Your cart is empty.</Text>
                                ) : (
                                    <>
                                        <Stack spacing={3}>
                                            {cart.items.map((item) => (
                                                <Flex key={item.product.id} alignItems="center">
                                                    <Image
                                                        src={item.product.image}
                                                        alt={item.product.name}
                                                        w={12}
                                                        h={12}
                                                        objectFit="cover"
                                                        mr={3}
                                                    />
                                                    <Box flex={1}>
                                                        <Heading as="h3" size="sm">
                                                            {item.product.name}
                                                        </Heading>
                                                        <Text fontWeight="bold" mb={1}>
                                                            ${item.product.price.toFixed(2)} x {item.quantity}
                                                        </Text>
                                                        <Button
                                                            size="sm"
                                                            colorScheme="red"
                                                            onClick={() => handleRemoveFromCart(item.product)}
                                                        >
                                                            Remove
                                                        </Button>
                                                    </Box>
                                                </Flex>
                                            ))}
                                        </Stack>
                                        <Divider my={3} />
                                        <Flex justifyContent="space-between" alignItems="center">
                                            <Text fontWeight="bold">Total:</Text>
                                            <Text fontWeight="bold">${cart.total.toFixed(2)}</Text>
                                        </Flex>
                                        <Button colorScheme="teal" size="sm" mt={3} onClick={handleCheckout}>
                                            Checkout
                                        </Button>
                                        <Button colorScheme="red" size="sm" mt={3} onClick={handleClearCart}>
                                            Clear cart
                                        </Button>
                                    </>
                                )}
                            </Box>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
