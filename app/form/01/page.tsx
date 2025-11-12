"use client";

import { Input } from "@/components/Input";
import NextBtn from "@/components/NextBtn";
import { FormErrors } from "@/src/types/form-type";
import * as React from "react";
import { stepOneFormAction } from "./actions";

const initialState: FormErrors = {};

export default function Step01() {
  
  const [serverErrors, formAction] = React.useActionState(stepOneFormAction, initialState);

  return (
    <form action={formAction} className="md:w-1/2 mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-blue-700">
        Informations sur l’entreprise
      </h1>

      <div className="space-y-4">
        <Input
          label="Nom de l'entreprise"
          id="company_name"
          name="company_name"
          error={serverErrors?.company_name}
        />
        <Input
          label="Fonction dans l'entreprise"
          id="company_function"
          name="company_function"
          error={serverErrors?.company_function}
        />
        <Input
          label="Département/Service"
          id="company_departement"
          name="company_departement"
          error={serverErrors?.company_departement}
        />
        <Input
          label="Ancienneté dans l'entreprise"
          id="company_anciennete"
          name="company_anciennete"
          placeholder="exemple 7 ans"
          error={serverErrors?.company_anciennete}
        />
      </div>

      <div className="flex justify-end mt-6">
        <NextBtn />
      </div>
    </form>
  );
}
