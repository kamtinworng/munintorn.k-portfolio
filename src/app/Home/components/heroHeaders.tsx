"use client";

import {
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Flex,
  Avatar,
  Stack,
} from "@mantine/core";
import { IconBrandGithub, IconCheck, IconMail } from "@tabler/icons-react";
import { Model } from "./modelIsland";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Html, OrbitControls, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html>{progress} % loaded</Html>;
}

export function HeroBullets() {
  return (
    <Flex
      ml={{ base: "md", sm: "xl", lg: "100px" }}
      mr={{ base: "md", sm: "xl", lg: "50px" }}
      mt={{ base: "md", sm: "xl", lg: "50px" }}
      justify={"center"}
      wrap={{ base: "wrap-reverse", lg: "nowrap" }}
      mb="lg"
    >
      <div>
        <div>
          <Stack gap={"lg"}>
            <Avatar size={"150px"} src="./platform.png" alt="it's me" />
            <Title>
              Mr.{" "}
              <Text component="span" c={"brand"} inherit>
                Munintorn Kamtinworng
              </Text>
              <br />
              Front-End Developer
            </Title>
          </Stack>
          <Text c="dimmed" mt="md">
            ผม – Mantine includes more than 120 customizable components and
            hooks to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" leftSection={<IconBrandGithub />}>
              GitHub
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              leftSection={<IconMail />}
            >
              Contacts
            </Button>
          </Group>
        </div>
      </div>
      <div>
        <Canvas
          className="modelThree"
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 5, 180] }}
        >
          <Suspense fallback={<Loader />}>
            <Model />
            <OrbitControls autoRotate enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </Flex>
  );
}
