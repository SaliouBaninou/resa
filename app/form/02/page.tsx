"use client";
import { CheckboxGroup } from "@/components/CheckBox";
import NextBtn from "@/components/NextBtn";
import { RadioGroup } from "@/components/RadioGroupProps";
import { ToggleField } from "@/components/ToggleField";


const automatisationOptions = [
  { label: "Partiellement", value: "partiellement" },
  { label: "Majoritairement", value: "majoritairement" },
  { label: "Non", value: "non" },
]

const typesAutomatisationsOptions = [
  { label: "Automates programmables", value: "automates-programmables" },
  { label: "Chaines de production robotisées", value: "chaines-de-production-robotisees" },
  { label: "Systeme de contrôle / Monitoring", value: "systeme-de-controle-monitoring" },
]

const automatisattionLevels = [
  { label: "Très faible", value: "tres-faible" },
  { label: "Faible", value: "faible" },
  { label: "Moyen", value: "moyen" },
  { label: "Fort", value: "fort" },
  { label: "Très fort", value: "tres-fort" },
]

export default function Step02() {


  return (
    <form className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-blue-700 ">Niveau d'automatisation de l'entreprise</h1>

      <div className="space-y-10">
        <div>
          <div>
            <h2 className="text-lg font-semibold">Votre entreprise dispose t'elle de procédés automatisés dans la production ?</h2>
            <span className="text-xs text-gray-500">Une seule réponse est attendue</span>
          </div>
          <div className="mt-4">
            <RadioGroup label="" options={automatisationOptions} />
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-lg font-semibold">Quels types d'automatisation utilisez-vous principalement ?</h2>
            <span className="text-xs text-gray-500">Plusieurs réponses peuvent être attendues</span>
          </div>
          <div className="mt-4 space-y-4">
            <CheckboxGroup label="" options={typesAutomatisationsOptions} />
            <ToggleField label="Autres" />
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-lg font-semibold">Selon vous, le niveau d'automatisation actuel de votre entreprise est ?</h2>
            <span className="text-xs text-gray-500">Une seule réponse est attendue</span>
          </div>
          <div className="mt-4">
            <RadioGroup label="" options={automatisattionLevels} />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">

        <NextBtn />
      </div>
    </form>
  );
}
