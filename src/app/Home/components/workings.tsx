"use client";

import {
  Text,
  Container,
  Title,
  Flex,
  SimpleGrid,
  Card,
  rem,
} from "@mantine/core";
import { IconBrandHtml5, IconUser } from "@tabler/icons-react";

export function Workings() {
  const mockdata = [
    {
      title: "HTML5",
      description:
        "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
      icon: (
        <IconBrandHtml5
          style={{ width: rem(80), height: rem(80) }}
          stroke={1.5}
        />
      ),
    },
    {
      title: "Privacy focused",
      description:
        "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
      icon: (
        <IconUser style={{ width: rem(80), height: rem(80) }} stroke={1.5} />
      ),
    },
    {
      title: "Privacy focused",
      description:
        "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
      icon: (
        <IconUser style={{ width: rem(80), height: rem(80) }} stroke={1.5} />
      ),
    },
  ];

  const features = mockdata.map((feature, i) => {
    const isEvenNumber = i % 2 === 0;
    return (
      <Card key={feature.title} shadow="md" radius="md" padding="xl">
        <Card.Section mt={"xs"} ml={"md"}>
          {feature.icon}
        </Card.Section>
        <Text fz="lg" fw={500} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    );
  });

  return (
    <Container h={"100%"} fluid p={"md"} bg={"brand"}>
      <Flex direction={"column"} align={"center"}>
        <Title order={1} mt={"lg"}>
          🚀 My Workings
        </Title>
        <Text lineClamp={2}></Text>
      </Flex>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
