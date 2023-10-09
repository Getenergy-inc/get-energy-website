import TitleHeader from "@/components/title-header";
import Info from "@/components/info";
import TeamList from "./team-list";

export default function OurTeam() {
    const body = `
        Meet the faces behind the scenes, the 
        experts who turn ideas into innovative energy 
        solutions. Our team is a diverse blend of visionaries, 
        engineers, and eco-conscious enthusiasts working 
        together to make clean, sustainable energy 
        accessible to all.
    `;

    return (
        <div className="w-full">
            <TitleHeader
                location="Our Team"
                type="1"
                title="Our Team"
            />
            <Info body={body} />
            <TeamList />
        </div>
    )
}
