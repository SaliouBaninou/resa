"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCompaniesWithNumberOfResponses } from "@/server/companies"

type CompanyWithResponses = {
  id: string
  name: string
  createdAt: string
  numberOfResponses: number
}

export default function EntreprisePage() {
  const [entreprises, setEntreprises] = useState<CompanyWithResponses[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
        const res = await getCompaniesWithNumberOfResponses()
        if (res.success && res.data) {
        // convertir createdAt en string
        const formattedData = res.data.map(company => ({
            ...company,
            createdAt: company.createdAt.toISOString(), // ou .toLocaleDateString() si tu veux directement le format affiché
        }))
        setEntreprises(formattedData)
        } else {
        console.error(res.message)
        }
    }
    fetchData()
    }, [])


  const handleRowClick = (id: string) => {
    router.push(`/dashboard/entreprises/${id}`)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Entreprises</h1>
      <div className="grid gap-4">
        {entreprises.map((company) => (
          <div
            key={company.id}
            onClick={() => handleRowClick(company.id)}
            className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{company.name}</h2>
              <p className="text-sm text-gray-500">
                Créé le : {new Date(company.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="text-center">
              <span className="text-gray-700 font-medium">{company.numberOfResponses}</span>
              <p className="text-xs text-gray-400">Réponses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
