import InitialScreen from "./initial-screen";
import React from "react";
import DebitCard from "../debit-card";

export default function GetElectricity() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [page, setPage] = React.useState<1 | 2>(1);
    const handleSubimt = (event: React.FormEvent) => {
        event.preventDefault();
        if (page === 1) return setPage(2);
        setIsLoading(true);
    }
    return (
        <form className="w-full flex flex-col items-center" onSubmit={handleSubimt}>
            {
                page === 1
                    ? <InitialScreen isLoading={isLoading} />
                    : <DebitCard isLoading={isLoading} />
            }
            <button className="w-3/5 p-4 text-white main-bg rounded-xl mt-20 hover:scale-[1.05]" type="submit" disabled={isLoading && true}>
                {page === 1 ? "Next" : "Pay"}
            </button>
        </form>
    )
}
