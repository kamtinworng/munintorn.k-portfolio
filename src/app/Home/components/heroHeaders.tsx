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
      id="Home"
    >
      <div>
        <div>
          <Flex
            gap={"lg"}
            align={{ base: "center", lg: "flex-start" }}
            direction={"column"}
          >
            <Avatar size={"150px"} src="./profile_1.jpg" alt="it's me" />
            <Title>
              Mr.{" "}
              <Text component="span" c={"brand"} inherit>
                มุนินทร คำทินวงศ์
              </Text>
              <br />
              FrontEnd AND BackEnd Developer
            </Title>
          </Flex>
          <Text c="dimmed" mt="md">
            สวัสดีครับ – ผมจบการศึกษาจาก สถาบันการอาชีวศึกษาภาคใต้ 3 ในสาขาวิชา
            เทคโนโลยีสารสนเทศ
            และมีประสบการณ์ทำงานด้านการเขียนโปรแกรมเป็นระยะเวลา 1 ปี 2 เดือน
            ในระหว่างการทำงานที่ผ่านมา
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
              <b>วุฒิการศึกษา</b> – ปริญญาตรี สาขาวิชาเทคโนโลยีสารสนเทศ
            </List.Item>
            <List.Item>
              <b>ประสบการณ์ทำงาน</b> – 1ปี 2เดือน
            </List.Item>
            <List.Item>
              <b>เกณฑ์ทหาร</b> – ผ่านการเกณฑ์ทหารแล้วในปี 2024
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              component="a"
              href="https://github.com/kamtinworng"
              radius="xl"
              size="md"
              target="_blank"
              leftSection={<IconBrandGithub />}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="mailto:mkamtinworng@gmail.com"
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
