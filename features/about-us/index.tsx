import TitleHeader from "@/components/title-header";
import OurFunctions from "./our-functions";
import Info from "@/components/info";
import IlluminatingTomorrow from "./illuminating-tomorrow";
import WhoWeAreVideo from "./who-we-are-video";
import OurTeam from "./our-team";

export default function AboutUs() {
    const body = `
        Getenergy your comprehensive
        hub for all your energy needs!
        As a leading energy service
        provider in Nigeria, we are
        dedicated to delivering innovative
        and efficient energy solutions
        to businesses and individuals.
    `
    return (
        <div className="w-full bg-white">
            <TitleHeader
                title="Who we are"
                type="1"
                location="About Us"
            />
            <Info body={body} />
            <IlluminatingTomorrow />
            <OurFunctions />
            <WhoWeAreVideo />
            {/** <OurTeam /> **/}
        </div>
    )
}
