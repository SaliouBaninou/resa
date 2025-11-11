import { TextArea } from "@/components/TextArea";

export default function Step05() {
    return (
      <form className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-blue-700 ">Perspectives et recommandations</h1>
  
        <div className="space-y-10">
          <div>
            <div>
              <h2 className="text-lg font-semibold">A moyen et long terme, quel impact supplémentaire l’automatisation pourrait-elle avoir sur votre entreprise?</h2>
            </div>
            <div className="mt-4 space-y-4">
             <TextArea label="" placeholder="Texte..."/>
            </div>
          </div>  
          <div>
            <div>
              <h2 className="text-lg font-semibold">Quelles recommandations feriez-vous pour renforcer l’efficacité de l’automatisation dans l’industrie gabonaise ?</h2>
            </div>
            <div className="mt-4 space-y-4">
             <TextArea label="" placeholder="Texte..."/>
            </div>
          </div>  
        </div>
  
        <div className="flex justify-end mt-6">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded" type="submit">
            Valider
          </button>
        </div>
      </form>
    );
}