import { useState } from "react";
import { RunWork } from "../common/types";
import WorkFunFilter from "../components/WorkRunFilter";
import IsToday from "../utils/IsToday";

export async function getServerSideProps() {
    const res = await fetch(process.env.RUN_WORK_JSON_URL);
    const json: RunWork = await res.json();

    return { props: { runWorkData: json, activePage: "workRun" } };
}

const WorkRun = ({
    runWorkData: { runWork, numberOfHeats, timestamp },
}: {
    runWorkData: RunWork;
}) => {
    const [selectedClass, setSelectedClass] = useState<string>("");
    const [filteredClasses, setFilteredClasses] = useState<string[]>([]);

    var eventDate = new Date(timestamp);

    if (!IsToday(eventDate)) {
        return (
            <div className="mt-5 mb-5 text-center">
                Work/Run order will be available on the day of the event.
            </div>
        );
    }

    return (
        <div>
            <div className="mt-5 mb-5 text-center">
                <p className="pb-2">
                    Please select your class from the filters below.
                </p>
                <p className="pb-2">
                    If you are a Novice, you will run with your base class.
                </p>
                <p className="pb-2">i.e. NDS runs with DS.</p>

                {numberOfHeats == 2 ? (
                    <p className="pb-2">
                        This event will run as <strong>two heats.</strong>
                    </p>
                ) : (
                    <p className="pb-2">
                        This event will run as{" "}
                        <strong>{numberOfHeats} heats</strong>. You are off
                        during the heat(s) not listed as running or working. Use
                        this time to prep your car, get lunch, etc. Please{" "}
                        <strong>watch the flag</strong> to know when to check in
                        for work.
                    </p>
                )}

                <p className="pb-2">
                    <strong>
                        You must check in for work both morning and afternoon
                    </strong>
                </p>
            </div>
            <WorkFunFilter
                classes={Object.keys(runWork)}
                selectedClass={selectedClass}
                handleSelectClass={(newClass) => {
                    setFilteredClasses([newClass]);

                    setSelectedClass(newClass);
                }}
            />
            {filteredClasses.map((c) => {
                return (
                    <div key={c} className="bg-white m-2 shadow-lg lg:mx-0">
                        <h2 className="bg-slate-800 p-2 text-center text-lg font-bold tracking-widest text-white">
                            {c}
                        </h2>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="col-span-1 text-center">
                                <div>Run</div>
                                <div className="text-xl font-bold">
                                    {runWork[c].run}
                                </div>
                            </div>
                            <div className="col-span-1 text-center">
                                <div>Work</div>
                                <div className="text-xl font-bold">
                                    {runWork[c].work}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default WorkRun;
