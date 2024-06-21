"use client";

import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Stack,
  Title,
  UnstyledButton,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./Demo.module.css";
import { useState } from "react";

export default function Pagelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });
  const [isDark, setIsDark] = useState(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Title order={4}>Munintorn Kamtonwong</Title>
            <Group ml="xl" gap={"lg"} visibleFrom="sm">
              <UnstyledButton>Home</UnstyledButton>
              <UnstyledButton>About Me</UnstyledButton>
              <UnstyledButton>Skillset</UnstyledButton>
              <UnstyledButton>Workings</UnstyledButton>
              <UnstyledButton
                onClick={() => {
                  setColorScheme(
                    computedColorScheme === "light" ? "dark" : "light"
                  );
                  setIsDark(!isDark);
                }}
              >
                {isDark ? (
                  <IconSun
                    className={cx(classes.icon, classes.light)}
                    stroke={1.5}
                  />
                ) : (
                  <IconMoon
                    className={cx(classes.icon, classes.dark)}
                    stroke={1.5}
                  />
                )}
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Stack gap={"lg"}>
          <UnstyledButton>Home</UnstyledButton>
          <UnstyledButton>About Me</UnstyledButton>
          <UnstyledButton>Skillset</UnstyledButton>
          <UnstyledButton>Workings</UnstyledButton>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
