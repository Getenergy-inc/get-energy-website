import React from "react";
import FormInput from "../ui/form-input";
import FormSelect from "../ui/form-select";
export default function GetData() {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubimt = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
  }
  return (
    <form className="w-full flex flex-col items-center" onSubmit={handleSubimt}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormInput
          placeholder="xxx-xxxx-xxxx"
          label="Phone number"
          subInfo="Must be 11 digits"
          required
          onchange={(e) => null}
          isLoading={isLoading}
        />

        <FormSelect
          label="Network Provider"
          onchange={(e) => null}
          required
          data={[]}
          placeholder="Select Network"
          isLoading={isLoading}
        />

        <FormSelect
          placeholder="Select Data Plan"
          label="How much Data do you want to purchase?"
          required
          data={[]}
          isLoading={isLoading}
          onchange={(e) => null}
        />

        <FormInput
          placeholder="xxx-xxxx-xxxx"
          label="Your name (optional)"
          isLoading={isLoading}
          onchange={(e) => null}
        />

        <FormInput
          placeholder="xxx-xxxx-xxxx"
          required
          isLoading={isLoading}
          label="Your name"
          onchange={(e) => null}
        />

        <FormInput
          placeholder="xxx-xxxx-xxxx"
          label="Card Details"
          required
          isLoading={isLoading}
          onchange={(e) => null}
        />
      </div>
      <button className="w-4/5 p-4 text-white main-bg rounded-xl mt-20 hover:scale-[1.05]" type="submit" disabled={isLoading && true}>
        Pay Now
      </button>
    </form>
  )
}
