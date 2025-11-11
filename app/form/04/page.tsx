import { CheckboxGroup } from "@/components/CheckBox";
import NextBtn from "@/components/NextBtn";
import { ToggleField } from "@/components/ToggleField";



const automatisationLocales = [
  { label: "Oui, largement", value: "oui-largement" },
  { label: "Oui, mais limitées", value: "oui-mais-limitees" },
  { label: "Non, insuffisantes", value: "non-insuffisantes" },
]


const automatisationObstacles = [
  { label: "Couts élévés d'investissement", value: "couts-eleves-d-investissement" },
  { label: "Manque de personnel qualifié", value: "manque-de-personnel-qualifie" },
  { label: "Maintenance difficile", value: "maintenance-difficile" },
  { label: "Résistance au changement du personnel", value: "resistance-au-changement-du-personnel" },
]

export default function Step04() {
    return (
      <form className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-blue-700 ">Freins et limites de l'automatisation</h1>
  
        <div className="space-y-10">
          <div>
            <div>
              <h2 className="text-lg font-semibold">Quels sont les principaux obstacles à l'automatisation dans votre entreprise ?</h2>
              <span className="text-xs text-gray-500">Plusieurs réponses peuvent être attendues</span>
            </div>
            <div className="mt-4 space-y-4">
              <CheckboxGroup label="" options={automatisationObstacles} />
              <ToggleField label="Autres" />
            </div>
          </div>
              <div>
            <div>
              <h2 className="text-lg font-semibold">selon vous, les compétences locales sont-elles suffisantes pour gérer les systemes automatisés ?</h2>
              <span className="text-xs text-gray-500">Plusieurs réponses peuvent être attendues</span>
            </div>
            <div className="mt-4 space-y-4">
              <CheckboxGroup label="" options={automatisationLocales} />
            </div>
          </div>
  
        </div>
  
        <div className="flex justify-end mt-6">
  
          <NextBtn />
        </div>
      </form>
    );
}