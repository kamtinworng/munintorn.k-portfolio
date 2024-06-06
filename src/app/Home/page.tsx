import { HeroBullets } from "./components/heroHeaders";
import { AboutMe } from "./components/aboutMe";
import { Workings } from "./components/workings";
import ProfessionalSkillset from "./components/professionalSkillset";
import { Stack } from "@mantine/core";

function Page() {
  return (
    <main>
      <Stack gap="md">
        <HeroBullets />
        <AboutMe />
        <ProfessionalSkillset />
        <Workings />
      </Stack>
    </main>
  );
}

export default Page;
