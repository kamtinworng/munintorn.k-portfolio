"use client";

import {
  Anchor,
  Group,
  ActionIcon,
  rem,
  Container,
  Flex,
  Box,
  Card,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBallBasketball,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export default function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <Card shadow="sm">
        <Flex
          gap="md"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
          w={"100%"}
          p={"md"}
        >
          <IconBallBasketball />
          <Group>{items}</Group>
          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Flex>
      </Card>
    </>
  );
}
