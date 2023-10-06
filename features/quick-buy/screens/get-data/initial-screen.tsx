import FormSelect from "../../ui/form-select";
import React from "react";
import FormInput from "../../ui/form-input";

type InitialScreenProps = {
    isLoading: boolean
}

export default function InitialScreen({ isLoading }: InitialScreenProps) {
    return (
        <div className="grid grid-cols-1 gap-8">
            <FormInput
                placeholder="xxx-xxxx-xxxx"
                label="Phone number"
                subInfo="Must be 11 digits"
                // required
                onchange={(e) => null}
                isLoading={isLoading}
            />

            <FormSelect
                placeholder="Select Data Plan"
                label="Select Data Plan"
                // required
                data={[]}
                isLoading={isLoading}
                onchange={(e) => null}
            />

            <FormSelect
                label="Network Provider"
                onchange={(e) => null}
                // required
                data={[]}
                placeholder="Select Network"
                isLoading={isLoading}
            />
        </div>
    )
}
