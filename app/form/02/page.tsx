"use client";

import * as React from "react";
import { CheckboxGroup } from "@/components/CheckBox";
import NextBtn from "@/components/NextBtn";
import { RadioGroup } from "@/components/RadioGroupProps";
import { ToggleField } from "@/components/ToggleField";
import { FormErrors } from "@/src/types/form-type";
import { stepTwoFormAction } from "./actions";

const automatisationOptions = [
  { label: "Partiellement", value: "partiellement" },
  { label: "Majoritairement", value: "majoritairement" },
  { label: "Non", value: "non" },
];

const typesAutomatisationsOptions = [
  { label: "Automates programmables", value: "automates-programmables" },
  { label: "Chaînes de production robotisées", value: "chaines-de-production-robotisees" },
  { label: "Système de contrôle / Monitoring", value: "systeme-de-controle-monitoring" },
];

const automatisattionLevels = [
  { label: "Très faible", value: "tres-faible" },
  { label: "Faible", value: "faible" },
  { label: "Moyen", value: "moyen" },
  { label: "Fort", value: "fort" },
  { label: "Très fort", value: "tres-fort" },
];

const initialState: FormErrors = {};


export default function Step02() {
  const [serverErrors, formAction] = React.useActionState(stepTwoFormAction, initialState);

  const registration = {
  name: "procedes_automatisations",
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  value: newDealData.procedes_automatisations || "",
};


  return (
    <form action={formAction} className="max-w-2xl mx-auto space-y-10">
      <h1 className="text-2xl font-semibold mb-4 text-blue-700">
        Niveau d'automatisation de l'entreprise
      </h1>

      {/* --- Procédés automatisés --- */}
      <div>
        <h2 className="text-lg font-semibold">Votre entreprise dispose t'elle de procédés automatisés dans la production ?</h2>
        <span className="text-xs text-gray-500">Une seule réponse est attendue</span>
        <div className="mt-4">
          <RadioGroup
            label=""
            registration={registration}
            options={automatisationOptions}
            error={serverErrors?.procedes_automatisations}
          />
        </div>
      </div>

      {/* --- Types d'automatisation --- */}
      <div>
        <h2 className="text-lg font-semibold">Quels types d'automatisation utilisez-vous principalement ?</h2>
        <span className="text-xs text-gray-500">Plusieurs réponses peuvent être attendues</span>
        <div className="mt-4 space-y-4">
          <CheckboxGroup
            label=""
            name="types_automatisations"
            options={typesAutomatisationsOptions}
            error={serverErrors?.types_automatisations}
          />
          <ToggleField
            label="Autres"
            textLabel="Précisez"
            toggleName="autre_automatisation"
            textName="autre_automatisation"
            error={serverErrors?.autre_automatisation}
          />
        </div>
      </div>

      {/* --- Niveau d'automatisation --- */}
      <div>
        <h2 className="text-lg font-semibold">Selon vous, le niveau d'automatisation actuel de votre entreprise est ?</h2>
        <span className="text-xs text-gray-500">Une seule réponse est attendue</span>
        <div className="mt-4">
          <RadioGroup
            label=""
            name="niveau_automatisation"
            options={automatisattionLevels}
            error={serverErrors?.niveau_automatisation}
          />
        </div>
      </div>

      {/* --- Bouton Suivant --- */}
      <div className="flex justify-end mt-6">
        <NextBtn />
      </div>
    </form>
  );
}
