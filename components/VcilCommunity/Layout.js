import { AboutUs } from "./AboutUs";
import { CoreTeam } from "./CoreTeam";
import { FAQ } from "./FAQ";
import GetInvolvePage from "./GetInvolve";
import { Mission } from "./Mission";
import { Person } from "./Person";
import { Strategy } from "./Strategy";
import { VolunteerBasedOrganization } from "./VolunteerBasedOrganization";

export default function VCILPageLayout() {
    return (
        <div className="grotesk max-w-8xl mx-auto">
            <section className="w-full text-black">
                <AboutUs />
                <Mission />
                <Strategy />
                <VolunteerBasedOrganization />
                <Person />
                <CoreTeam />
                <FAQ />
                <GetInvolvePage />
            </section>
        </div>
    );
}
