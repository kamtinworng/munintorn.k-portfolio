"use client";

import {
  Text,
  Container,
  Title,
  Flex,
  SimpleGrid,
  Card,
  Image,
  ActionIcon,
  Badge,
  Button,
  Group,
  List,
} from "@mantine/core";
import { IconBrandHtml5, IconHeart, IconUser } from "@tabler/icons-react";
import { title } from "process";
import {
  SiPhp,
  SiMysql,
  SiFlutter,
  SiRemix,
  SiPostgresql,
  SiPrisma,
  SiHono,
  SiMantine,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
export function Workings() {
  const mockdata = [
    {
      image: "/deenaHomePage.png",
      title: "DEENAPHONE",
      year: "2022",
      description:
        "เว็บไซต์ระบบผ่อนโทรศัพท์เป็นแพลตฟอร์มออนไลน์ที่ช่วยให้ลูกค้าสามารถเลือกซื้อและผ่อนชำระโทรศัพท์มือถือได้อย่างสะดวก และ รวดเร็ว",
      lists: [
        "การเลือกซื้อโทรศัพท์: ลูกค้าสามารถเลือกดูและซื้อโทรศัพท์",
        "ระบบผ่อนชำระ: แสดงยอดเงินที่ต้องชำระรายเดือนและวันที่ครบกำหนดชำระ",
        "การติดตามการผ่อนชำระ: ลูกค้าสามารถตรวจสอบสถานะการผ่อนชำระและได้รับการแจ้งเตือนเมื่อถึงกำหนดชำระ",
        "ระบบหลังบ้าน: ผู้ดูแลระบบสามารถดูข้อมูลการผ่อนชำระของลูกค้า รายได้ และวิเคราะห์ข้อมูลผ่านกราฟและแผนภูมิ",
      ],
      badges: [
        { emoji: <SiPhp />, label: "PHP" },
        { emoji: <SiMysql />, label: "MYSQL" },
        { emoji: <FaCss3Alt />, label: "CSS" },
        { emoji: <FaBootstrap />, label: "BOOTSTRAP" },
        { emoji: <IoLogoJavascript />, label: "JAVASCRIPT" },
        { emoji: "📈", label: "CHARTJS" },
      ],
    },
    {
      image: "/pineAppleHomePage.png",
      title: "PINEAPPLE",
      year: "2023",
      description:
        "แอปพลิเคชัน Pineapple เป็นแอปพลิเคชันที่ออกแบบมาเพื่อช่วยให้ผู้ใช้งานสามารถดูแลและจัดการประกันของมือถือหรืออุปกรณ์อิเล็กทรอนิกส์ต่างๆ ได้อย่างสะดวกและง่ายดาย ด้วย Pineapple ผู้ใช้งานสามารถทำสิ่งต่างๆ ",
      lists: [
        "ตรวจสอบสถานะประกัน: ผู้ใช้งานสามารถดูข้อมูลเกี่ยวกับประกันที่มีอยู่ได้ ไม่ว่าจะเป็นรายละเอียดของประกัน เช่น วันหมดอายุ เงื่อนไขการคุ้มครอง และข้อมูลบริษัทประกัน",
        "แจ้งเตือนเมื่อประกันใกล้หมดอายุ: Pineapple มีระบบแจ้งเตือนเมื่อประกันใกล้หมดอายุ เพื่อให้ผู้ใช้งานสามารถเตรียมตัวในการต่ออายุประกันล่วงหน้า",
        "ต่ออายุประกัน: ผู้ใช้งานสามารถต่ออายุประกันได้ผ่านแอปพลิเคชัน โดยไม่ต้องไปติดต่อกับบริษัทประกันโดยตรง สามารถเลือกแผนประกันที่ต้องการและชำระเงินได้ในแอปพลิเคชัน",
        // "บันทึกข้อมูลอุปกรณ์: ผู้ใช้งานสามารถบันทึกข้อมูลอุปกรณ์ต่างๆ ที่มีอยู่ในระบบของ Pineapple เพื่อให้การจัดการประกันเป็นเรื่องที่ง่ายและเป็นระบบ",
      ],
      badges: [
        { emoji: <SiFlutter />, label: "FLUTTER" },
        { emoji: <GrGraphQl />, label: "GRAPHQL" },
        { emoji: <RiNextjsLine />, label: "NEXTJS" },
        // { emoji: "🌲", label: "Nature" },
        // { emoji: "🤽", label: "Water sports" },
      ],
    },
    {
      image: "iTakeHomePage.png",
      title: "ITAKE",
      year: "2023 - 2024",
      description:
        "ระบบเคลม iTake เป็นระบบที่ถูกออกแบบมาเพื่อเพิ่มประสิทธิภาพและความสะดวกสบายในการจัดการกระบวนการเคลมประกันภัยให้แก่ผู้ใช้และเจ้าหน้าที่เคลมประกันภัย โดยมีฟีเจอร์และการทำงานที่หลากหลาย",
      lists: [
        "การเลือกซื้อโทรศัพท์: ลูกค้าสามารถเลือกดูและซื้อโทรศัพท์",
        "ระบบผ่อนชำระ: แสดงยอดเงินที่ต้องชำระรายเดือนและวันที่ครบกำหนดชำระ",
        "การติดตามการผ่อนชำระ: ลูกค้าสามารถตรวจสอบสถานะการผ่อนชำระและได้รับการแจ้งเตือนเมื่อถึงกำหนดชำระ",
        "ระบบหลังบ้าน: ผู้ดูแลระบบสามารถดูข้อมูลการผ่อนชำระของลูกค้า รายได้ และวิเคราะห์ข้อมูลผ่านกราฟและแผนภูมิ",
      ],
      badges: [
        { emoji: <SiRemix />, label: "REMIX" },
        { emoji: <SiPostgresql />, label: "POSTGRES" },
        { emoji: <SiPrisma />, label: "PRISMA" },
        { emoji: <SiHono />, label: "HONO" },
        { emoji: <SiMantine />, label: "MANTINE" },
      ],
    },
  ];

  const features = mockdata.map((feature, i) => {
    const badgesfn = feature.badges.map((badge) => (
      <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
        {badge.label}
      </Badge>
    ));

    return (
      <Card withBorder radius="md" p="md">
        <Card.Section>
          <Image src={feature.image} alt={feature.title} height={180} />
        </Card.Section>

        <Card.Section mt="md" pl={"md"}>
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {feature.title}
            </Text>
            <Badge size="sm" variant="light">
              {feature.year}
            </Badge>
          </Group>
          <Text fz="sm" mt="xs">
            {feature.description}
          </Text>
        </Card.Section>

        <Card.Section pl={"md"} pr={"xl"}>
          <List size="sm" mt={"sm"}>
            {feature.lists.map((list, i) => {
              return <List.Item key={i}>{list}</List.Item>;
            })}
          </List>
        </Card.Section>

        <Card.Section pl={"md"} pr={"md"}>
          <Text mt="md" c="dimmed">
            Tools
          </Text>
          <Group gap={7} mt={5}>
            {badgesfn}
          </Group>
        </Card.Section>

        {/* <Group mt="xs" pl={"md"} pr={"md"}>
          <Button radius="md" style={{ flex: 1 }}>
            Show details
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart stroke={1.5} />
          </ActionIcon>
        </Group> */}
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
