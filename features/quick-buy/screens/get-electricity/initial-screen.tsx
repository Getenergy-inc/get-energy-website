import FormSelect from "../../ui/form-select";
import React from "react";
import FormInput from "../../ui/form-input";

type InitialScreenProps = {
    isLoading: boolean
}

export default function InitialScreen({ isLoading }: InitialScreenProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput
                placeholder="xxx-xxxx-xxxx"
                label="Meter Number"
                subInfo="Must be between 7-11 digits"
                required
                onchange={(e) => null}
                isLoading={isLoading}
            />

            <FormSelect
                label="Electricity Distrubution"
                onchange={(e) => null}
                required
                data={[]}
                placeholder="Select State"
                isLoading={isLoading}
            />

            <FormInput
                placeholder="Enter Amount"
                required
                isLoading={isLoading}
                label="Electricity Amount"
                onchange={(e) => null}
            />

            <FormInput
                placeholder="Enter Email"
                label="Email"
                required
                isLoading={isLoading}
                onchange={(e) => null}
            />
        </div>
    )
}
