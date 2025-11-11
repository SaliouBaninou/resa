import { CheckboxGroup } from "@/components/CheckBox";
import NextBtn from "@/components/NextBtn";
import { Select } from "@/components/Select";
import { ToggleField } from "@/components/ToggleField";


const echelleOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
]


const automatisationContributionOptions = [
  { label: "Réduire les coûts de production", value: "reduire-les-couts-de-production" },
  { label: "Améliorer la rapidité d'exécutution", value: "ameliorer-la-rapidity-d-execution" },
  { label: "Optimiser la sécurité des employés", value: "optimiser-la-securite-des-employes" },
  { label: "Améliorer la traçabilité et le suivi", value: "ameliorer-la-tracabilite-et-le-suivi" },
]


export default function Step03() {
    return (
      <form className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-blue-700 ">Effets de l'automatisation sur la performance</h1>
  
        <div className="space-y-10">
          <div>
            <div>
              <h2 className="text-lg font-semibold">L'automatisation a eu un impact significatif sur la productivité de votre entreprise.</h2>
              <span className="text-xs text-gray-500">Sur une echelle de 1 a 5, affirmer</span>
              <div className="text-sm font-semibold text-gray-500 flex flex-col gap-2">
                <span>1 : Echelle pas du tout d'accord</span>
                <span>5 : Echelle totalement d'accord</span>
              </div>
            </div>
            <div className="mt-4">
              <Select label="" options={echelleOptions} />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-semibold">En termes de qualité, l'automatisation a permis de réduire les défauts et les nonconformités.</h2>
              <span className="text-xs text-gray-500">Sur une echelle de 1 a 5, affirmer</span>
                <div className="text-sm font-semibold text-gray-500 flex flex-col gap-2">
                  <span>1 : Echelle pas du tout d'accord</span>
                  <span>5 : Echelle totalement d'accord</span>
              </div>
            </div>
            <div className="mt-4">
              <Select label="" options={echelleOptions} />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-semibold">Quels types d'automatisation utilisez-vous principalement ?</h2>
              <span className="text-xs text-gray-500">Plusieurs réponses peuvent être attendues</span>
            </div>
            <div className="mt-4 space-y-4">
              <CheckboxGroup label="" options={automatisationContributionOptions} />
              <ToggleField label="Autres" />
            </div>
          </div>
        </div>
  
        <div className="flex justify-end mt-6">
  
          <NextBtn />
        </div>
      </form>
    );
}