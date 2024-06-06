import { rem } from "@mantine/core";
import { IconBrandNodejs, IconBrandGraphql } from "@tabler/icons-react";
import { SiFastapi } from "react-icons/si";
import { RiRemixRunFill } from "react-icons/ri";
export const backend = [
  {
    icon: (
      <IconBrandNodejs
        style={{ width: rem(80), height: rem(80) }}
        stroke={1.5}
      />
    ),
    name: "NODEJS",
    detail:
      "Please click anywhere on this card to claim your reward, this is not a",
  },
  {
    icon: (
      <IconBrandGraphql
        style={{ width: rem(80), height: rem(80) }}
        stroke={1.5}
      />
    ),
    name: "GRAPHQL",
    detail:
      "Please click anywhere on this card to claim your reward, this is not a",
  },
  {
    icon: <SiFastapi style={{ width: rem(80), height: rem(80) }} />,
    name: "FASTAPI",
    detail:
      "Please click anywhere on this card to claim your reward, this is not a",
  },
  {
    icon: <RiRemixRunFill style={{ width: rem(80), height: rem(80) }} />,
    name: "REMIX",
    detail:
      "Please click anywhere on this card to claim your reward, this is not a",
  },
];
