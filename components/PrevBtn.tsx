import Image from "next/image";

export default function NextBtn(){
    return (
        <button type="submit" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded">
            <span>Précédent</span>
            <Image className="rotate-180" src="/arrow.svg" alt="Flèche vers la droite" width={8} height={8} />
        </button>
    )
}