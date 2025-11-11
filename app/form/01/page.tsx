"use client";
import { Input } from "@/components/Input";
import NextBtn from "@/components/NextBtn";

export default function Step01() {


  return (
    <form  className="md:w-1/2 mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-blue-700 ">Informations sur l’entreprise</h1>

      <div className="space-y-4">
        <Input label="Nom de l'entreprise"/>
        <Input label="Fonction dans l'entreprise" />
        <Input label="Nom de l'entreprise" />
        <Input label="Nom de l'entreprise"  placeholder="exemple 7 ans"/>
      </div>

      <div className="flex justify-end mt-6">
        <NextBtn/>
      </div>
    </form>
  );
}
