import { rem } from "@mantine/core";
import { IconBrandMongodb, IconBrandMysql } from "@tabler/icons-react";
import { SiPostgresql } from "react-icons/si";

export const database = [
  {
    icon: (
      <IconBrandMysql
        style={{ width: rem(80), height: rem(80) }}
        stroke={1.5}
      />
    ),
    name: "MYSQL",
    detail:
      "Please click anywhere on this card to claim your reward, this is not a",
  },
  {
    icon: <SiPostgresql style={{ width: rem(80), height: rem(80) }} />,
    name: "POSTGRES",
    detail:
      "Please click anywhere on this card to claim your reward, this is not a",
  },
  {
    icon: (
      <IconBrandMongodb
        style={{ width: rem(80), height: rem(80) }}
        stroke={1.5}
      />
    ),
    name: "MONGODB",
    detail:
      "Please click anywhere on this card to claim your reward, this is not a",
  },
];
