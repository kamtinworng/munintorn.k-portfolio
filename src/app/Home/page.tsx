import { HeroBullets } from "./components/heroHeaders";
import { AboutMe } from "./components/aboutMe";
import { Workings } from "./components/workings";
import ProfessionalSkillset from "./components/professionalSkillset";
import { Stack } from "@mantine/core";
import Footer from "./components/footer";

function Page() {
  return (
    <main>
      <Stack gap="md">
        <HeroBullets />
        <AboutMe />
        <ProfessionalSkillset />
        <Workings />
        <Footer />
      </Stack>
    </main>
  );
}

export default Page;
