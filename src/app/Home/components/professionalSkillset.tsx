"use client";

import {
  Center,
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  Group,
  Box,
} from "@mantine/core";
import { professional } from "./value/professional";
import { backend } from "./value/backend";
import { database } from "./value/database";

export default function ProfessionalSkillset() {
  const cardItemProfessional = professional.map((item) => {
    return (
      <Card shadow="sm" padding="xl">
        <Center>{item.icon}</Center>
        <Center>
          <Text fw={500} size="lg" mt="md">
            {item.name}
          </Text>
        </Center>
      </Card>
    );
  });

  const cardItemBACKEND = backend.map((item) => {
    return (
      <Card shadow="sm" padding="xl">
        <Center>{item.icon}</Center>
        <Center>
          <Text fw={500} size="lg" mt="md">
            {item.name}
          </Text>
        </Center>
      </Card>
    );
  });
  const cardItemDatabase = database.map((item) => {
    return (
      <Card shadow="sm" padding="xl">
        <Center>{item.icon}</Center>
        <Center>
          <Text fw={500} size="lg" mt="md">
            {item.name}
          </Text>
        </Center>
      </Card>
    );
  });

  return (
    <Stack p={"lg"}>
      <Title order={1}>
        Professional{" "}
        <Text span c={"brand"} inherit>
          Skillset
        </Text>
      </Title>
      <SimpleGrid spacing="xl" cols={{ lg: 7, md: 4, sm: 2, xs: 2 }}>
        {cardItemProfessional}
      </SimpleGrid>

      <Title order={1}>
        BACKEND{" "}
        <Text span c={"brand"} inherit>
          Skillset
        </Text>
      </Title>
      <SimpleGrid spacing="xl" cols={{ lg: 7, md: 4, sm: 2, xs: 2 }}>
        {cardItemBACKEND}
      </SimpleGrid>

      <Title order={1}>
        DATABASE{" "}
        <Text span c={"brand"} inherit>
          Skillset
        </Text>
      </Title>
      <SimpleGrid spacing="xl" cols={{ lg: 7, md: 4, sm: 2, xs: 2 }}>
        {cardItemDatabase}
      </SimpleGrid>
    </Stack>
  );
}
