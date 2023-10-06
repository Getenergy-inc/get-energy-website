import FormSelect from "../ui/form-select";
import FormInput from "../ui/form-input";
import * as React from 'react';

type DebitCardProps = {
    isLoading: boolean
}

export default function DebitCard({ isLoading }: DebitCardProps) {
    return (
        <div className="grid grid-cols-1 gap-8 lg:px-56">
            <div className="text-center flex items-center justify-center">
                <h1 className="font-bold main-text border-b-4 pb-1 main-border">
                    Debit Card
                </h1>
            </div>

            <FormSelect
                placeholder="Please your card number"
                label="Card Number"
                required
                data={[]}
                isLoading={isLoading}
                onchange={(e) => null}
            />

            <div className="flex items-center grid grid-cols-2 gap-8">
                <div>
                    <label>Expiry Date</label>
                    <div className="flex items-center">
                        <FormInput
                            placeholder="MM"
                            required
                            isLoading={isLoading}
                            onchange={(e) => null}
                        />
                        <span className="mx-3 text-4xl sub-text">/</span>
                        <FormInput
                            placeholder="YY"
                            required
                            isLoading={isLoading}
                            onchange={(e) => null}
                        />
                    </div>
                </div>

                <FormInput
                    placeholder="Enter your CVV"
                    required
                    isLoading={isLoading}
                    label="CVV"
                    onchange={(e) => null}
                />
            </div>

            <FormInput
                placeholder="xxx-xxxx-xxxx"
                label="Pin"
                required
                isLoading={isLoading}
                onchange={(e) => null}
            />
        </div>
    )
}
