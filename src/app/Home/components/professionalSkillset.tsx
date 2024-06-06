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
} from "@mantine/core";
import { professional } from "./value/professional";
import { backend } from "./value/backend";
import { database } from "./value/database";

export default function ProfessionalSkillset() {
  const cardItemProfessional = professional.map((item) => {
    return (
      <Card shadow="sm" padding="xl">
        <Card.Section mt={"xs"} ml={"xs"}>
          {item.icon}
        </Card.Section>
        <Text fw={500} size="lg" mt="md">
          {item.name}
        </Text>
        <Text mt="xs" c="dimmed" size="sm">
          {item.detail}
        </Text>
      </Card>
    );
  });

  const cardItemBACKEND = backend.map((item) => {
    return (
      <Card shadow="sm" padding="xl">
        <Card.Section mt={"xs"} ml={"xs"}>
          {item.icon}
        </Card.Section>
        <Text fw={500} size="lg" mt="md">
          {item.name}
        </Text>
        <Text mt="xs" c="dimmed" size="sm">
          {item.detail}
        </Text>
      </Card>
    );
  });
  const cardItemDatabase = database.map((item) => {
    return (
      <Card shadow="sm" padding="xl">
        <Card.Section mt={"xs"} ml={"xs"}>
          {item.icon}
        </Card.Section>
        <Text fw={500} size="lg" mt="md">
          {item.name}
        </Text>
        <Text mt="xs" c="dimmed" size="sm">
          {item.detail}
        </Text>
      </Card>
    );
  });

  return (
    <Container mt={"md"} fluid mb={"lg"}>
      <Stack>
        <Group>
          <Center>
            <Title order={1}>
              Professional{" "}
              <Text span c={"brand"} inherit>
                Skillset
              </Text>
            </Title>
          </Center>
          <SimpleGrid cols={{ lg: 5, md: 3, sm: 1 }}>
            {cardItemProfessional}
          </SimpleGrid>
        </Group>

        <Group>
          <Center>
            <Title order={1}>
              BACKEND{" "}
              <Text span c={"brand"} inherit>
                Skillset
              </Text>
            </Title>
          </Center>
          <SimpleGrid cols={{ lg: 5, md: 3, sm: 1 }}>
            {cardItemBACKEND}
          </SimpleGrid>
        </Group>

        <Group>
          <Center>
            <Title order={1}>
              DATABASE{" "}
              <Text span c={"brand"} inherit>
                Skillset
              </Text>
            </Title>
          </Center>
          <SimpleGrid cols={{ lg: 5, md: 3, sm: 1 }}>
            {cardItemDatabase}
          </SimpleGrid>
        </Group>
      </Stack>
    </Container>
  );
}
